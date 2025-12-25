// Shared TypeScript interfaces for the EduGen application

export interface Question {
  number?: number
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'easy' | 'medium' | 'hard'
  source?: string
}

export interface QuizResult {
  subject: string
  subjectId?: string
  subjectBM?: string
  score: number
  totalQuestions: number
  timestamp: string
  difficulty?: string
  chapters?: string[]
  form?: number
  correctAnswers?: number
  color?: string
  questions?: Question[]
  userAnswers?: Record<number, string>
}

export interface SyllabusTopic {
  chapter: string
  topics: string[]
}

export interface ChapterData {
  chapter?: string
  title: string
  keyTopics: string[]
  keyTerms?: string[]
  keyDates?: Record<string, string>
  keyFigures?: string[]
  form?: string | number
}

export interface GeminiResponse {
  questions: Question[]
  subject: string
  educationLevel: string
  timestamp: string
  source: string
  chaptersCount?: number
  chapterTitle?: string
  chapterForm?: string | number
  textLength?: number
}
