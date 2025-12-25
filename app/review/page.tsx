'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Question {
  number?: number
  question: string
  options?: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer?: string
  explanation?: string
  difficulty?: string
}

interface QuizResult {
  subject: string
  subjectId: string
  subjectBM: string
  form: number
  chapters: number
  score: number
  correctAnswers: number
  totalQuestions: number
  timestamp: string
  color: string
  questions: Question[]
  userAnswers: Record<number, string>
}

export default function ReviewPage() {
  const router = useRouter()
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)

  useEffect(() => {
    const storedReview = sessionStorage.getItem('review-quiz')

    if (!storedReview) {
      router.push('/?tab=dashboard')
      return
    }

    setQuizResult(JSON.parse(storedReview))
  }, [router])

  const handleBack = () => {
    sessionStorage.removeItem('review-quiz')
    router.push('/?tab=dashboard')
  }

  if (!quizResult) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading review...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-${quizResult.color}-500 rounded-xl flex items-center justify-center text-3xl shadow-md`}>
                {quizResult.subjectId === 'mathematics' && '📐'}
                {quizResult.subjectId === 'addMath' && '🧮'}
                {quizResult.subjectId === 'physics' && '⚛️'}
                {quizResult.subjectId === 'chemistry' && '🧪'}
                {quizResult.subjectId === 'biology' && '🧬'}
                {quizResult.subjectId === 'islam' && '☪️'}
                {quizResult.subjectId === 'sejarah' && '📜'}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Quiz Review - {quizResult.subjectBM}</h1>
                <p className="text-sm text-slate-500">
                  Form {quizResult.form} • Taken on {new Date(quizResult.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 max-w-[1200px] mx-auto">
        {/* Score Summary */}
        <div className={`p-6 rounded-xl border-2 mb-6 ${
          quizResult.score >= 50
            ? 'border-green-500 bg-green-50'
            : 'border-red-500 bg-red-50'
        }`}>
          <div className="text-center">
            <div className={`text-5xl font-bold mb-2 ${
              quizResult.score >= 50 ? 'text-green-600' : 'text-red-600'
            }`}>
              {quizResult.score}%
            </div>
            <div className="text-lg font-semibold text-slate-900 mb-1">
              {quizResult.correctAnswers} / {quizResult.totalQuestions} Correct
            </div>
            <div className={`text-sm ${
              quizResult.score >= 50 ? 'text-green-700' : 'text-red-700'
            }`}>
              {quizResult.score >= 50 ? 'Pass - Good job!' : 'Fail - Keep practicing!'}
            </div>
          </div>
        </div>

        {/* Questions Review */}
        <div className="space-y-6">
          {quizResult.questions.map((q, index) => {
            const userAnswer = quizResult.userAnswers[index]
            const isCorrect = userAnswer === q.correctAnswer
            const isWrong = userAnswer && !isCorrect

            return (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-slate-200 p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-lg text-sm font-medium min-w-[3rem] text-center ${
                    isCorrect ? 'bg-green-100 text-green-700' :
                    isWrong ? 'bg-red-100 text-red-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    Q{index + 1}
                  </div>
                  {q.difficulty && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {q.difficulty}
                    </span>
                  )}
                  <div className="flex-1">
                    <p className="text-slate-900 font-medium leading-relaxed">{q.question}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {q.options && Object.entries(q.options).map(([key, value]) => {
                    const isUserAnswer = userAnswer === key
                    const isCorrectOption = q.correctAnswer === key

                    let buttonClass = 'border-slate-200 bg-white'
                    if (isCorrectOption) {
                      buttonClass = 'border-green-500 bg-green-50'
                    } else if (isUserAnswer && isWrong) {
                      buttonClass = 'border-red-500 bg-red-50'
                    }

                    return (
                      <div
                        key={key}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${buttonClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-700 min-w-[1.5rem]">{key}.</span>
                          <span className="text-slate-900 flex-1">{value}</span>
                          {isCorrectOption && (
                            <span className="text-green-600 font-medium text-sm">✓ Correct Answer</span>
                          )}
                          {isUserAnswer && isWrong && (
                            <span className="text-red-600 font-medium text-sm">✗ Your Answer</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {!userAnswer && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-700 font-medium text-sm">⚠️ Not Answered</span>
                    </div>
                  </div>
                )}

                {q.explanation && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-blue-900 mb-1">EXPLANATION</div>
                        <div className="text-sm text-blue-800">{q.explanation}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={handleBack}
            className="w-full px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </main>
  )
}
