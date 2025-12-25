'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizMode from '@/components/QuizMode'

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<any[]>([])
  const [metadata, setMetadata] = useState<any>(null)

  useEffect(() => {
    const storedQuestions = sessionStorage.getItem('quiz-questions')
    const storedMetadata = sessionStorage.getItem('quiz-metadata')

    if (!storedQuestions || !storedMetadata) {
      router.push('/')
      return
    }

    setQuestions(JSON.parse(storedQuestions))
    setMetadata(JSON.parse(storedMetadata))
  }, [router])

  const handleQuizComplete = (correctAnswers: number, totalQuestions: number, userAnswers: Record<number, string>) => {
    if (!metadata) return

    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100)

    const result = {
      subject: metadata.subjectName,
      subjectId: metadata.subject,
      subjectBM: metadata.subjectNameBM,
      form: metadata.form,
      chapters: metadata.chapters,
      score: scorePercentage,
      correctAnswers,
      totalQuestions,
      passed: scorePercentage >= 50,
      timestamp: new Date().toISOString(),
      color: metadata.color,
      questions,
      userAnswers,
    }

    const saved = localStorage.getItem('edugen-quiz-results')
    const quizResults = saved ? JSON.parse(saved) : []
    const updated = [result, ...quizResults]
    localStorage.setItem('edugen-quiz-results', JSON.stringify(updated))

    // Update gamification data
    if (typeof window !== 'undefined') {
      const { updatePlayerDataAfterQuiz } = require('@/lib/gamification')
      const { playerData, xpGained, leveledUp, newAchievements } = updatePlayerDataAfterQuiz(
        correctAnswers,
        totalQuestions,
        updated
      )

      // Store rewards to show on dashboard
      sessionStorage.setItem('quiz-rewards', JSON.stringify({
        xpGained,
        leveledUp,
        newAchievements,
        newLevel: playerData.level
      }))
    }

    sessionStorage.removeItem('quiz-questions')
    sessionStorage.removeItem('quiz-metadata')

    setTimeout(() => {
      router.push('/?tab=dashboard')
    }, 2000)
  }

  const handleBack = () => {
    sessionStorage.removeItem('quiz-questions')
    sessionStorage.removeItem('quiz-metadata')
    router.push('/')
  }

  if (questions.length === 0 || !metadata) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading quiz...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-4 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-${metadata.color}-500 rounded-xl flex items-center justify-center text-3xl shadow-md`}>
                {metadata.subject === 'mathematics' && '📐'}
                {metadata.subject === 'addMath' && '🧮'}
                {metadata.subject === 'physics' && '⚛️'}
                {metadata.subject === 'chemistry' && '🧪'}
                {metadata.subject === 'biology' && '🧬'}
                {metadata.subject === 'islam' && '☪️'}
                {metadata.subject === 'sejarah' && '📜'}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{metadata.subjectNameBM}</h1>
                <p className="text-sm text-slate-500">Form {metadata.form} • {metadata.chapters} Chapter{metadata.chapters > 1 ? 's' : ''}</p>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Exit Quiz
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 max-w-[1600px] mx-auto">
        <QuizMode
          questions={questions}
          chapter={`${metadata.subjectNameBM} - Form ${metadata.form}`}
          onComplete={handleQuizComplete}
          onBack={handleBack}
        />
      </div>
    </main>
  )
}
