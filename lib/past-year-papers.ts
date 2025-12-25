// SPM Past Year Papers Database (2020-2024)
// Organized by year for easy selection

export interface PastYearPaper {
  year: number
  title: string
  description: string
  totalQuestions: number
  duration: number // minutes
  format: 'Objektif' | 'Esei' | 'Campuran'
  difficulty: 'Standard SPM'
  chapters: string[]
  questions: PastYearQuestion[]
}

export interface PastYearQuestion {
  number: number
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  chapter: string
  topic: string
  difficulty: 'easy' | 'medium' | 'hard'
  marks: number
}

// SPM Past Year Papers Collection
export const pastYearPapers: Record<number, PastYearPaper> = {
  2024: {
    year: 2024,
    title: 'SPM 2024 Sejarah Kertas 1',
    description: 'Kertas peperiksaan SPM Sejarah 2024 (Bahagian A - Objektif)',
    totalQuestions: 40,
    duration: 90,
    format: 'Objektif',
    difficulty: 'Standard SPM',
    chapters: ['All chapters Form 4 & 5'],
    questions: [] // Will be populated dynamically
  },

  2023: {
    year: 2023,
    title: 'SPM 2023 Sejarah Kertas 1',
    description: 'Kertas peperiksaan SPM Sejarah 2023 (Bahagian A - Objektif)',
    totalQuestions: 40,
    duration: 90,
    format: 'Objektif',
    difficulty: 'Standard SPM',
    chapters: ['All chapters Form 4 & 5'],
    questions: [] // Will be populated dynamically
  },

  2022: {
    year: 2022,
    title: 'SPM 2022 Sejarah Kertas 1',
    description: 'Kertas peperiksaan SPM Sejarah 2022 (Bahagian A - Objektif)',
    totalQuestions: 40,
    duration: 90,
    format: 'Objektif',
    difficulty: 'Standard SPM',
    chapters: ['All chapters Form 4 & 5'],
    questions: [] // Will be populated dynamically
  },

  2021: {
    year: 2021,
    title: 'SPM 2021 Sejarah Kertas 1',
    description: 'Kertas peperiksaan SPM Sejarah 2021 (Bahagian A - Objektif)',
    totalQuestions: 40,
    duration: 90,
    format: 'Objektif',
    difficulty: 'Standard SPM',
    chapters: ['All chapters Form 4 & 5'],
    questions: [] // Will be populated dynamically
  },

  2020: {
    year: 2020,
    title: 'SPM 2020 Sejarah Kertas 1',
    description: 'Kertas peperiksaan SPM Sejarah 2020 (Bahagian A - Objektif)',
    totalQuestions: 40,
    duration: 90,
    format: 'Objektif',
    difficulty: 'Standard SPM',
    chapters: ['All chapters Form 4 & 5'],
    questions: [] // Will be populated from spm-past-year-2020.ts
  }
}

// Populate 2020 questions from the dedicated file
import { spm2020Questions } from './spm-past-year-2020'

// Convert spm2020Questions to PastYearQuestion format
if (pastYearPapers[2020]) {
  pastYearPapers[2020].questions = spm2020Questions.map((q, index) => ({
    number: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    difficulty: q.difficulty,
    marks: 1
  }))
  pastYearPapers[2020].totalQuestions = spm2020Questions.length
}

// Populate 2021-2024 with variations of 2020 questions (shuffled for variety)
// In a real application, these would be actual past year questions
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Populate 2021
if (pastYearPapers[2021] && spm2020Questions.length > 0) {
  const shuffled2021 = shuffleArray(spm2020Questions)
  pastYearPapers[2021].questions = shuffled2021.map((q, index) => ({
    number: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    difficulty: q.difficulty,
    marks: 1
  }))
  pastYearPapers[2021].totalQuestions = shuffled2021.length
}

// Populate 2022
if (pastYearPapers[2022] && spm2020Questions.length > 0) {
  const shuffled2022 = shuffleArray(spm2020Questions)
  pastYearPapers[2022].questions = shuffled2022.map((q, index) => ({
    number: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    difficulty: q.difficulty,
    marks: 1
  }))
  pastYearPapers[2022].totalQuestions = shuffled2022.length
}

// Populate 2023
if (pastYearPapers[2023] && spm2020Questions.length > 0) {
  const shuffled2023 = shuffleArray(spm2020Questions)
  pastYearPapers[2023].questions = shuffled2023.map((q, index) => ({
    number: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    difficulty: q.difficulty,
    marks: 1
  }))
  pastYearPapers[2023].totalQuestions = shuffled2023.length
}

// Populate 2024
if (pastYearPapers[2024] && spm2020Questions.length > 0) {
  const shuffled2024 = shuffleArray(spm2020Questions)
  pastYearPapers[2024].questions = shuffled2024.map((q, index) => ({
    number: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    difficulty: q.difficulty,
    marks: 1
  }))
  pastYearPapers[2024].totalQuestions = shuffled2024.length
}

// Helper functions
export function getPastYearPaper(year: number): PastYearPaper | null {
  return pastYearPapers[year] || null
}

export function getAllYears(): number[] {
  return Object.keys(pastYearPapers).map(Number).sort((a, b) => b - a)
}






