'use client'

import { useState, useRef, useEffect } from 'react'
import { Question } from '@/lib/types'

interface QuizModeProps {
  questions: Question[]
  chapter: string
  onComplete: (score: number, total: number, userAnswers: Record<number, string>) => void
  onBack: () => void
}

export default function QuizMode({ questions, chapter, onComplete, onBack }: QuizModeProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionRefs = useRef<(HTMLDivElement | null)[]>([])

  const selectOption = (questionIndex: number, option: string) => {
    if (!isSubmitted) {
      setSelectedAnswers(prev => ({ ...prev, [questionIndex]: option }))
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setIsSubmitted(true)
    onComplete(correctCount, questions.length, selectedAnswers)
  }

  const scrollToQuestion = (index: number) => {
    questionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setCurrentQuestion(index)
  }

  // Track which question is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = questionRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) setCurrentQuestion(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    questionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const answeredCount = Object.keys(selectedAnswers).length
  const allAnswered = answeredCount === questions.length

  return (
    <div className="flex gap-8">
      {/* Sidebar - Question Navigator */}
      <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
        <div className="sticky top-6 space-y-4">
          {/* Progress Summary */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-900">
                {isSubmitted ? 'Quiz Complete' : 'Progress'}
              </span>
              <span className="text-sm font-bold text-slate-700">
                {answeredCount}/{questions.length}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div
                className={`h-full transition-all ${
                  isSubmitted ? 'bg-green-500' : 'bg-primary-600'
                }`}
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
            {isSubmitted && (
              <div className="text-center pt-2 border-t border-slate-200">
                <div className={`text-3xl font-bold ${
                  (score / questions.length) >= 0.5 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  {score} correct out of {questions.length}
                </div>
              </div>
            )}
          </div>

          {/* Question Grid Navigator */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Questions</h3>
            <div className="grid grid-cols-5 gap-2 max-h-[600px] overflow-y-auto overflow-x-visible p-1">
              {questions.map((q, index) => {
                const isAnswered = selectedAnswers[index] !== undefined
                const isCorrect = selectedAnswers[index] === q.correctAnswer
                const isWrong = isSubmitted && isAnswered && !isCorrect
                const isCurrent = currentQuestion === index

                return (
                  <button
                    key={index}
                    onClick={() => scrollToQuestion(index)}
                    className={`
                      w-full h-10 flex items-center justify-center rounded-lg font-medium text-sm transition-all
                      ${isCurrent ? 'ring-2 ring-primary-500 ring-offset-1' : ''}
                      ${!isSubmitted && !isAnswered ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : ''}
                      ${!isSubmitted && isAnswered ? 'bg-primary-600 text-white hover:bg-primary-700' : ''}
                      ${isSubmitted && isCorrect ? 'bg-green-500 text-white' : ''}
                      ${isSubmitted && isWrong ? 'bg-red-500 text-white' : ''}
                      ${isSubmitted && !isAnswered ? 'bg-slate-100 text-slate-400' : ''}
                    `}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-primary-600"></div>
                    <span className="text-slate-600">Answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-slate-100 border border-slate-300"></div>
                    <span className="text-slate-600">Not answered</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <span className="text-slate-600">Correct</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-slate-600">Wrong</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-slate-100 border border-slate-300"></div>
                    <span className="text-slate-600">Skipped</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Questions */}
      <div className="flex-1 space-y-6">
        {/* Mobile Progress Bar */}
        <div className="lg:hidden bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-900">
              {isSubmitted ? 'Quiz Complete' : 'Progress'}
            </span>
            <span className="text-sm text-slate-500">
              {answeredCount} / {questions.length}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                isSubmitted ? 'bg-green-500' : 'bg-primary-600'
              }`}
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Results Card (After Submit) */}
        {isSubmitted && (
          <div className={`p-6 rounded-xl border-2 ${
            (score / questions.length) >= 0.5
              ? 'border-green-500 bg-green-50'
              : 'border-red-500 bg-red-50'
          }`}>
            <div className="text-center">
              <div className={`text-5xl font-bold mb-2 ${
                (score / questions.length) >= 0.5 ? 'text-green-600' : 'text-red-600'
              }`}>
                {Math.round((score / questions.length) * 100)}%
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-1">
                {score} / {questions.length} Correct
              </div>
              <div className={`text-sm ${
                (score / questions.length) >= 0.5 ? 'text-green-700' : 'text-red-700'
              }`}>
                {(score / questions.length) >= 0.5 ? 'Pass - Good job!' : 'Fail - Keep practicing!'}
              </div>
            </div>
          </div>
        )}

        {/* Questions */}
        {questions.map((q, index) => {
          const isCorrect = selectedAnswers[index] === q.correctAnswer
          const isWrong = isSubmitted && selectedAnswers[index] && !isCorrect

          return (
            <div
              key={index}
              ref={(el) => { questionRefs.current[index] = el }}
              className="bg-white rounded-xl border-2 border-slate-200 p-6 scroll-mt-6"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`px-3 py-1 rounded-lg text-sm font-medium min-w-[3rem] text-center ${
                    !isSubmitted ? 'bg-slate-100 text-slate-700' :
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
                </div>
                <p className="text-slate-900 font-medium leading-relaxed">{q.question}</p>
              </div>

              <div className="space-y-2">
                {q.options && Object.entries(q.options).map(([key, value]) => {
                  const isSelected = selectedAnswers[index] === key
                  const isCorrectOption = q.correctAnswer === key

                  let buttonClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  if (isSelected && !isSubmitted) {
                    buttonClass = 'border-primary-600 bg-primary-50'
                  } else if (isSubmitted) {
                    if (isCorrectOption) {
                      buttonClass = 'border-green-500 bg-green-50'
                    } else if (isSelected && isWrong) {
                      buttonClass = 'border-red-500 bg-red-50'
                    }
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => selectOption(index, key)}
                      disabled={isSubmitted}
                      className={`w-full px-4 py-3 rounded-lg border-2 text-left transition-all disabled:cursor-not-allowed ${buttonClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-700 min-w-[1.5rem]">{key}.</span>
                        <span className="text-slate-900 flex-1">{value}</span>
                        {isSubmitted && isCorrectOption && (
                          <span className="text-green-600 font-medium text-sm">✓ Correct</span>
                        )}
                        {isSubmitted && isSelected && isWrong && (
                          <span className="text-red-600 font-medium text-sm">✗ Wrong</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {isSubmitted && q.explanation && (
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

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t-2 border-slate-200 p-4 -mx-6 -mb-6 rounded-b-xl">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {allAnswered ? 'Submit Answers' : `Answer All Questions (${answeredCount}/${questions.length})`}
            </button>
          ) : (
            <button
              onClick={onBack}
              className="w-full px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
