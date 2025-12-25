import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { getSyllabusContext, malaysianSubjectGuidelines, getSejarahSyllabus } from '@/lib/malaysian-syllabus'
import { getChapterContent } from '@/lib/sejarah-chapters-content'
import { spm2020Questions, getQuestionsByChapter, getRandomQuestions } from '@/lib/spm-past-year-2020'
import { getSubject, getSubjectTopicsByForm } from '@/lib/subjects-config'
import { getSubjectSyllabusPrompt } from '@/lib/multi-subject-syllabus'
import { Question, SyllabusTopic, ChapterData, GeminiResponse } from '@/lib/types'

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

// Function to generate questions using Google Gemini with Malaysian syllabus context
async function generateQuestions(
  subject: string,
  text: string,
  educationLevel: string,
  sejarahChapter?: string,
  selectedChapters?: string[],
  form?: number
) {
  const syllabusContext = getSyllabusContext(educationLevel)
  const subjectGuideline = malaysianSubjectGuidelines[subject] || ''

  // Get subject-specific syllabus prompt
  const subjectData = getSubject(subject)
  const subjectSyllabusPrompt = getSubjectSyllabusPrompt(subject)

  // Build syllabus-aware prompt
  let syllabusInfo = subjectSyllabusPrompt || ''

  if (syllabusContext) {
    syllabusInfo += `
MALAYSIAN EDUCATION CONTEXT:
- Education Level: ${syllabusContext.level}
- Exam Type: ${syllabusContext.examType}
- Language Complexity: ${syllabusContext.languageContext}

Question Format Guidelines:
${syllabusContext.questionFormat.map(format => `- ${format}`).join('\n')}

Focus Areas:
${syllabusContext.focusAreas.map(area => `- ${area}`).join('\n')}
`
  }

  if (subjectGuideline) {
    syllabusInfo += `\nSubject-Specific Guidelines: ${subjectGuideline}\n`
  }

  // Add Sejarah-specific syllabus context (legacy support)
  if (subject === 'history' || subject === 'sejarah') {
    const sejarahSyllabus = getSejarahSyllabus(educationLevel)
    if (sejarahSyllabus) {
      syllabusInfo += `\n=== SEJARAH (HISTORY) SYLLABUS CONTEXT ===\n`
      syllabusInfo += `${sejarahSyllabus.description}\n\n`

      if (sejarahSyllabus.topics) {
        syllabusInfo += `SYLLABUS TOPICS:\n`
        sejarahSyllabus.topics.forEach((topic: SyllabusTopic) => {
          syllabusInfo += `\n${topic.chapter}:\n`
          topic.topics.forEach((t: string) => syllabusInfo += `  - ${t}\n`)
        })
      }

      if (sejarahSyllabus.form4Topics && sejarahSyllabus.form5Topics) {
        syllabusInfo += `\nFORM 4 TOPICS:\n`
        sejarahSyllabus.form4Topics.forEach((topic: SyllabusTopic) => {
          syllabusInfo += `\n${topic.chapter}:\n`
          topic.topics.forEach((t: string) => syllabusInfo += `  - ${t}\n`)
        })

        syllabusInfo += `\nFORM 5 TOPICS:\n`
        sejarahSyllabus.form5Topics.forEach((topic: SyllabusTopic) => {
          syllabusInfo += `\n${topic.chapter}:\n`
          topic.topics.forEach((t: string) => syllabusInfo += `  - ${t}\n`)
        })
      }

      if (sejarahSyllabus.examFormat) {
        syllabusInfo += `\nEXAM FORMAT:\n${sejarahSyllabus.examFormat}\n`
      }

      if (sejarahSyllabus.skills) {
        syllabusInfo += `\nKEY SKILLS REQUIRED:\n`
        if (Array.isArray(sejarahSyllabus.skills)) {
          sejarahSyllabus.skills.forEach((skill: string) => syllabusInfo += `- ${skill}\n`)
        }
      }

      if (sejarahSyllabus.keyHistoricalDates) {
        syllabusInfo += `\nIMPORTANT HISTORICAL DATES:\n`
        Object.entries(sejarahSyllabus.keyHistoricalDates).forEach(([year, event]) => {
          syllabusInfo += `- ${year}: ${event}\n`
        })
      }

      syllabusInfo += `\n=== END OF SEJARAH SYLLABUS CONTEXT ===\n`
    }
  }

  // Handle chapter-based generation for all subjects
  let chapterContext = ''
  let isObjectiveMode = false

  // Multi-subject chapter handling
  if (selectedChapters && selectedChapters.length > 0 && subjectData) {
    isObjectiveMode = true
    const chaptersData = selectedChapters
      .map(chapterId => subjectData.topics.find(t => t.chapter === chapterId))
      .filter((ch): ch is NonNullable<typeof ch> => ch !== undefined)

    if (chaptersData.length > 0) {
      // Add randomization seed based on timestamp
      const randomSeed = Date.now()
      const variationStyles = [
        'focus on conceptual understanding',
        'emphasize problem-solving applications',
        'include real-world scenarios',
        'test theoretical knowledge',
        'mix calculations with theory',
        'include diagram-based questions',
        'focus on definitions and terminology',
        'emphasize cause-and-effect relationships'
      ]
      const selectedStyle = variationStyles[randomSeed % variationStyles.length]

      chapterContext = `
=== SPM ${subjectData.nameBM.toUpperCase()} CHAPTER MODE - OBJECTIVE QUESTIONS ===

SUBJECT: ${subjectData.nameBM} (${subjectData.name})
FORM: ${form || 4}
GENERATION SEED: ${randomSeed}

SELECTED CHAPTERS:
${chaptersData.map((ch) => `- ${ch.chapter.toUpperCase()}: ${ch.title}`).join('\n')}

KEY TOPICS TO COVER:
${chaptersData.flatMap((ch) => ch.keyTopics || []).map((topic: string) => `- ${topic}`).join('\n')}

${chaptersData.some((ch) => ch.keyTerms) ? `IMPORTANT TERMS:
${chaptersData.flatMap((ch) => ch.keyTerms || []).join(', ')}` : ''}

SPECIAL INSTRUCTIONS FOR OBJECTIVE QUESTIONS:
- YOU MUST Generate EXACTLY 40 objective questions - NO MORE, NO LESS
- Number them from 1 to 40
- Cover ALL key topics listed above across all selected chapters
- Mix difficulty levels (Easy: 16 questions, Medium: 16 questions, Hard: 8 questions)
- Each question must have ONE correct answer
- Distractors (wrong options) should be plausible but clearly incorrect
- DO NOT STOP until you have generated ALL 40 QUESTIONS

⚠️ VARIATION REQUIREMENT (to ensure unique questions each time):
- Primary style for this generation: ${selectedStyle}
- Create DIFFERENT questions from previous attempts - vary the wording, scenarios, and angles
- Use different examples and contexts for each generation
- Mix question formats: direct questions, calculations, scenarios, diagrams
- Ensure NO duplicate questions from previous sessions
- Generate fresh perspectives on the same topics

=== END CHAPTER CONTEXT ===
`
    }
  }
  // Legacy Sejarah chapter handling
  else if (sejarahChapter && (subject === 'history' || subject === 'sejarah')) {
    const chapterData = getChapterContent(sejarahChapter)
    if (chapterData) {
      isObjectiveMode = true

      // Add randomization seed
      const randomSeed = Date.now()
      const variationFocus = [
        'chronological events and dates',
        'key figures and their contributions',
        'cause and effect relationships',
        'historical significance and impact',
        'comparison between different periods',
        'terminology and definitions',
        'document analysis and interpretation',
        'cultural and social aspects'
      ]
      const selectedFocus = variationFocus[randomSeed % variationFocus.length]

      chapterContext = `
=== SPM SEJARAH CHAPTER MODE - OBJECTIVE QUESTIONS ===

CHAPTER: ${chapterData.title}
FORM: ${chapterData.form}
GENERATION SEED: ${randomSeed}

KEY TOPICS TO COVER:
${chapterData.keyTopics.map((topic: string) => `- ${topic}`).join('\n')}

${chapterData.keyDates ? `IMPORTANT DATES:
${Object.entries(chapterData.keyDates).map(([date, event]) => `- ${date}: ${event}`).join('\n')}
` : ''}

${chapterData.keyFigures && chapterData.keyFigures.length > 0 ? `KEY HISTORICAL FIGURES:
${chapterData.keyFigures.map((figure: string) => `- ${figure}`).join('\n')}
` : ''}

${chapterData.keyTerms ? `IMPORTANT TERMS:
${chapterData.keyTerms.join(', ')}
` : ''}

SPECIAL INSTRUCTIONS FOR OBJECTIVE QUESTIONS:
- YOU MUST Generate EXACTLY 40 objective questions - NO MORE, NO LESS
- Number them from 1 to 40
- Cover ALL key topics listed above
- Include dates, names, events, and important facts
- Questions should match SPM Sejarah Bahagian A format
- Mix difficulty levels (Easy: 16 questions, Medium: 16 questions, Hard: 8 questions)
- Use proper Bahasa Melayu where appropriate
- Each question must have ONE correct answer
- Distractors (wrong options) should be plausible but clearly incorrect
- DO NOT STOP until you have generated ALL 40 QUESTIONS

⚠️ VARIATION REQUIREMENT (to ensure unique questions each time):
- Primary focus for this generation: ${selectedFocus}
- Create DIFFERENT questions from previous attempts
- Vary question angles and perspectives on the same historical events
- Use different phrasing and contexts
- Mix direct recall with analytical questions
- Generate fresh examples and scenarios based on historical facts

=== END CHAPTER CONTEXT ===
`
    }
  }

  const prompt = `You are an educational assistant specializing in the Malaysian school syllabus. Create high-quality study questions aligned with Malaysian curriculum standards.

${syllabusInfo}

${chapterContext}

Subject: ${subjectData ? subjectData.name : subject}

${!isObjectiveMode ? `Text to analyze:
${text}` : ''}

INSTRUCTIONS:
${isObjectiveMode ?
  '⚠️ CRITICAL: Generate EXACTLY 40 objective questions. Count them as you generate: 1, 2, 3... up to 40. Do not stop before reaching 40!' :
  'Generate 5-8 questions based on this text that are appropriate for the specified Malaysian education level.'
}

${isObjectiveMode ? `
For EACH of the 40 objective questions (YOU MUST GENERATE ALL 40), provide:
1. The question number (1-40)
2. The question text (in appropriate language for the subject)
3. Four options (A, B, C, D)
4. The correct answer (A, B, C, or D)
5. Brief explanation why it's correct
6. The difficulty level (Easy, Medium, or Hard)

⚠️ IMPORTANT VARIATION GUIDELINES:
- Each time this prompt runs, generate COMPLETELY DIFFERENT questions
- Avoid repeating question patterns or wordings from typical textbooks
- Use creative scenarios and real-world applications when possible
- Vary the complexity and approach for each topic
- If covering the same concept, ask about it from different angles
- Use diverse contexts, examples, and calculation methods
- Make questions feel fresh and unique each generation

⚠️ REMINDER: You must generate ALL 40 questions. If you're running out of topics, create variations or ask from different angles.

Return the questions in this EXACT JSON format (THIS MUST BE A VALID JSON ARRAY WITH 40 OBJECTS):
[
  {
    "number": 1,
    "question": "What is the formula for the area of a circle?",
    "options": {
      "A": "πr",
      "B": "2πr",
      "C": "πr²",
      "D": "2πr²"
    },
    "correctAnswer": "C",
    "explanation": "The area of a circle is calculated using the formula A = πr², where r is the radius.",
    "difficulty": "Easy"
  },
  ... (continue until question 40)
]

⚠️ CRITICAL: GENERATE ALL 40 QUESTIONS! Count to 40!
RETURN ONLY THE JSON ARRAY, NO OTHER TEXT!
` : `
For each question, provide:
1. The question itself (appropriate for the education level and exam format)
2. A detailed model answer based on the text (following Malaysian exam answer standards)
3. The type (Conceptual, Explanatory, Application, Definition, Analysis, or KBAT)
4. The difficulty level (Easy, Medium, or Hard - relative to the education level)

IMPORTANT:
- Questions should match the format and complexity expected in Malaysian exams
- Include Malaysian context and examples where relevant
- For SPM/STPM levels, include structured question parts (a), (b), (c) where appropriate
- Use language appropriate for the education level
- Consider KBAT (Higher Order Thinking Skills) requirements for secondary levels

Return the questions in this exact JSON format:
[
  {
    "question": "...",
    "answer": "...",
    "type": "...",
    "difficulty": "..."
  }
]

Make sure the questions are diverse, covering different aspects and difficulty levels of the material.
`}`

  try {
    // Get the generative model - using gemini-2.5-flash for higher free tier limits
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    // Generate content
    const result = await model.generateContent(prompt)
    const response = await result.response
    const responseText = response.text()

    // Try multiple parsing strategies
    let questions: Question[] = []

    // Strategy 1: Direct JSON parse
    try {
      questions = JSON.parse(responseText)
      if (Array.isArray(questions)) {
        return questions
      }
    } catch (e) {
      // Direct parse failed, continue to pattern matching
    }

    // Strategy 2: Extract JSON array from text
    const jsonMatch = responseText.match(/\[\s*\{[\s\S]*\}\s*\]/)
    if (jsonMatch) {
      try {
        questions = JSON.parse(jsonMatch[0])
        if (Array.isArray(questions)) {
          return questions
        }
      } catch (e) {
        // Pattern match failed, continue to code block
      }
    }

    // Strategy 3: Extract JSON between code blocks
    const codeBlockMatch = responseText.match(/```(?:json)?\s*(\[[\s\S]*?\])\s*```/)
    if (codeBlockMatch) {
      try {
        questions = JSON.parse(codeBlockMatch[1])
        if (Array.isArray(questions)) {
          return questions
        }
      } catch (e) {
        // Code block parse failed
      }
    }

    throw new Error('Failed to parse questions from AI response')
  } catch (error) {
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { subject, text, educationLevel, sejarahChapter, sejarahChapters, selectedChapters, form } = body

    // Validation
    if (!subject) {
      return NextResponse.json(
        { error: 'Subject is required' },
        { status: 400 }
      )
    }

    if (!educationLevel) {
      return NextResponse.json(
        { error: 'Education level is required' },
        { status: 400 }
      )
    }

    // Support both single chapter (legacy) and multiple chapters
    const chaptersToProcess = selectedChapters || sejarahChapters || (sejarahChapter ? [sejarahChapter] : [])

    // For chapter mode, chapter is required instead of text
    const isChapterMode = (educationLevel === 'form-4' || educationLevel === 'form-5') && chaptersToProcess.length > 0

    if (!isChapterMode && (!text || text.length < 50)) {
      return NextResponse.json(
        { error: 'Text is too short or chapter selection required. Please provide at least 50 characters or select chapters.' },
        { status: 400 }
      )
    }

    // Check for specific SPM mode with chapter
    const isSPMMode = (educationLevel === 'form-4' || educationLevel === 'form-5')

    if (isSPMMode && chaptersToProcess.length === 0 && !text) {
      return NextResponse.json(
        { error: 'Chapter selection is required for SPM level subjects' },
        { status: 400 }
      )
    }

    // Check if user wants to use SPM 2020 past year questions
    const usePastYear = body.usePastYear === true

    let questions: Question[] = []
    let chapterData: ChapterData | null = null

    // Past year questions only for Sejarah for now
    if (usePastYear && (subject === 'sejarah' || subject === 'history') && isSPMMode && chaptersToProcess.length > 0) {
      // Use SPM 2020 past year questions for multiple chapters
      const allPastYearQuestions: Question[] = []

      for (const chapterId of chaptersToProcess) {
        const chapterInfo = getChapterContent(chapterId)
        const pastYearQuestions = getQuestionsByChapter(chapterInfo?.title || '')
        allPastYearQuestions.push(...pastYearQuestions)
      }

      if (allPastYearQuestions.length > 0) {
        // Mix with random questions to reach 40
        const allAvailableQuestions = [...allPastYearQuestions]

        // If not enough, get more random questions from other chapters
        if (allAvailableQuestions.length < 40) {
          const additionalQuestions = getRandomQuestions(40 - allAvailableQuestions.length)
          allAvailableQuestions.push(...additionalQuestions)
        }

        // Shuffle and take 40
        const shuffled = allAvailableQuestions.sort(() => Math.random() - 0.5)
        questions = shuffled.slice(0, 40).map((q, index) => ({
          number: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          difficulty: q.difficulty,
          source: 'SPM 2020'
        }))
      }
    }

    // If not using past year or no questions found, generate with AI
    if (questions.length === 0) {
      // Check if API key is configured
      if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json(
          { error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env.local file.' },
          { status: 500 }
        )
      }

      try {
        // Generate questions with all chapters at once for better coherence
        if (chaptersToProcess.length > 0) {
          questions = await generateQuestions(subject, text, educationLevel, undefined, chaptersToProcess, form)

          if (chaptersToProcess.length === 1) {
            chapterData = getSubject(subject)?.topics.find(t => t.chapter === chaptersToProcess[0]) || null
            if (!chapterData && (subject === 'sejarah' || subject === 'history')) {
              chapterData = getChapterContent(chaptersToProcess[0])
            }
          }
        } else {
          // No chapters - generate from text
          questions = await generateQuestions(subject, text, educationLevel)
        }
      } catch (aiError) {
        // Fallback: Try to use any available past year questions (only for Sejarah)
        if ((subject === 'sejarah' || subject === 'history') && isSPMMode && chaptersToProcess.length > 0) {
          const fallbackQuestions = getRandomQuestions(40)
          if (fallbackQuestions.length > 0) {
            questions = fallbackQuestions.map((q, index) => ({
              number: index + 1,
              question: q.question,
              options: q.options,
              correctAnswer: q.correctAnswer,
              explanation: q.explanation,
              difficulty: q.difficulty,
            }))
          }
        }

        // If still no questions, throw error
        if (questions.length === 0) {
          const errorMessage = aiError instanceof Error ? aiError.message : 'Unknown error'
          return NextResponse.json(
            { error: `Failed to generate questions: ${errorMessage}` },
            { status: 500 }
          )
        }
      }
    }

    const response: GeminiResponse = {
      questions,
      subject,
      educationLevel,
      timestamp: new Date().toISOString(),
      source: usePastYear && questions.length > 0 && questions[0]?.source === 'SPM 2020' ? 'SPM 2020 Past Year' : 'AI Generated',
      chaptersCount: chaptersToProcess.length
    }

    if (chaptersToProcess.length > 0) {
      if (!chapterData && chaptersToProcess.length === 1) {
        chapterData = getChapterContent(chaptersToProcess[0])
      }
      response.chapterTitle = chapterData?.title || `${chaptersToProcess.length} chapters`
      response.chapterForm = chapterData?.form || ''
    } else {
      response.textLength = text.length
    }

    return NextResponse.json(response)
  } catch (error) {
    // Provide more specific error messages
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Failed to generate questions: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
