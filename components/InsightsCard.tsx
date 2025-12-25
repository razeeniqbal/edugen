'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
}

interface SubjectPerformance {
  subjectId: string
  subject: string
  subjectBM: string
  color: string
  totalQuizzes: number
  averageScore: number
  totalQuestions: number
  correctAnswers: number
  lastAttempt: string
  trend: 'improving' | 'declining' | 'stable'
  form4Score: number
  form5Score: number
}

interface InsightsCardProps {
  quizResults: QuizResult[]
}

export default function InsightsCard({ quizResults }: InsightsCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Calculate subject-wise performance
  const subjectPerformance: Record<string, SubjectPerformance> = {}

  quizResults.forEach((result) => {
    const key = result.subjectId

    if (!subjectPerformance[key]) {
      subjectPerformance[key] = {
        subjectId: result.subjectId,
        subject: result.subject,
        subjectBM: result.subjectBM,
        color: result.color,
        totalQuizzes: 0,
        averageScore: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        lastAttempt: result.timestamp,
        trend: 'stable',
        form4Score: 0,
        form5Score: 0,
      }
    }

    const perf = subjectPerformance[key]
    perf.totalQuizzes++
    perf.totalQuestions += result.totalQuestions
    perf.correctAnswers += result.correctAnswers

    // Track form-specific scores
    if (result.form === 4) {
      perf.form4Score = result.score
    } else if (result.form === 5) {
      perf.form5Score = result.score
    }

    // Update last attempt if more recent
    if (new Date(result.timestamp) > new Date(perf.lastAttempt)) {
      perf.lastAttempt = result.timestamp
    }
  })

  // Calculate averages and trends
  Object.values(subjectPerformance).forEach((perf) => {
    perf.averageScore = Math.round((perf.correctAnswers / perf.totalQuestions) * 100)

    // Calculate trend based on recent performance
    const subjectQuizzes = quizResults
      .filter((r) => r.subjectId === perf.subjectId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    if (subjectQuizzes.length >= 2) {
      const recentAvg = (subjectQuizzes[0].score + (subjectQuizzes[1]?.score || 0)) / 2
      const olderAvg = subjectQuizzes.slice(-2).reduce((sum, q) => sum + q.score, 0) / 2

      if (recentAvg > olderAvg + 5) perf.trend = 'improving'
      else if (recentAvg < olderAvg - 5) perf.trend = 'declining'
    }
  })

  const subjects = Object.values(subjectPerformance).sort((a, b) => a.averageScore - b.averageScore)
  const weakSubjects = subjects.slice(0, 3)
  const strongSubjects = subjects.slice(-3).reverse()

  // Identify topics needing improvement
  const topicsToImprove = weakSubjects.filter(s => s.averageScore < 70)
  const topicsToMaster = subjects.filter(s => s.averageScore >= 70 && s.averageScore < 85)

  // Calculate overall statistics
  const overallStats = {
    totalQuizzes: quizResults.length,
    totalQuestions: quizResults.reduce((sum, r) => sum + r.totalQuestions, 0),
    totalCorrect: quizResults.reduce((sum, r) => sum + r.correctAnswers, 0),
    averageScore: quizResults.length > 0
      ? Math.round(quizResults.reduce((sum, r) => sum + r.score, 0) / quizResults.length)
      : 0,
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      mathematics: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      physics: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
      chemistry: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
      biology: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
      islam: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      sejarah: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    }
    return colorMap[color] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' }
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'improving') return '📈'
    if (trend === 'declining') return '📉'
    return '➡️'
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Overall Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
      >
        <h2 className="text-2xl font-heading font-bold mb-4">📊 Overall Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">{overallStats.totalQuizzes}</div>
            <div className="text-sm opacity-90">Quizzes Taken</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">{overallStats.averageScore}%</div>
            <div className="text-sm opacity-90">Average Score</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">{overallStats.totalCorrect}</div>
            <div className="text-sm opacity-90">Correct Answers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">{subjects.length}</div>
            <div className="text-sm opacity-90">Subjects Studied</div>
          </div>
        </div>
      </motion.div>

      {/* Areas Needing Improvement */}
      {topicsToImprove.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
        >
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
            🎯 Priority Areas - Need Improvement
          </h3>
          <p className="text-sm text-gray-600 mb-4">Focus on these subjects to improve your overall performance</p>
          <div className="space-y-3">
            {topicsToImprove.map((subject, idx) => {
              const colors = getColorClasses(subject.color)
              return (
                <motion.div
                  key={subject.subjectId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border-2 ${colors.border} ${colors.bg} rounded-xl p-4`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {subject.subjectId === 'mathematics' && '📐'}
                        {subject.subjectId === 'addMath' && '🧮'}
                        {subject.subjectId === 'physics' && '⚛️'}
                        {subject.subjectId === 'chemistry' && '🧪'}
                        {subject.subjectId === 'biology' && '🧬'}
                        {subject.subjectId === 'islam' && '☪️'}
                        {subject.subjectId === 'sejarah' && '📜'}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${colors.text}`}>{subject.subjectBM}</h4>
                        <p className="text-xs text-gray-600">{subject.totalQuizzes} quiz{subject.totalQuizzes > 1 ? 'zes' : ''} taken</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(subject.averageScore)}`}>
                        {subject.averageScore}%
                      </div>
                      <div className="text-xs text-gray-600">{getTrendIcon(subject.trend)} {subject.trend}</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div
                      className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all"
                      style={{ width: `${subject.averageScore}%` }}
                    />
                  </div>

                  {/* Recommendations */}
                  <div className="mt-3 text-sm">
                    <p className={`font-medium ${colors.text}`}>💡 Recommendation:</p>
                    <ul className="mt-1 space-y-1 text-gray-700">
                      {subject.averageScore < 50 && (
                        <li>• Review fundamental concepts and try easier practice questions</li>
                      )}
                      {subject.averageScore >= 50 && subject.averageScore < 70 && (
                        <li>• Practice more questions to strengthen understanding</li>
                      )}
                      {subject.form4Score > 0 && subject.form4Score < 70 && (
                        <li>• Focus on Form 4 chapters (current: {subject.form4Score}%)</li>
                      )}
                      {subject.form5Score > 0 && subject.form5Score < 70 && (
                        <li>• Focus on Form 5 chapters (current: {subject.form5Score}%)</li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Areas to Master */}
      {topicsToMaster.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
        >
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
            ⭐ Almost There - Push for Excellence
          </h3>
          <p className="text-sm text-gray-600 mb-4">You're doing well! Practice more to achieve mastery</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topicsToMaster.map((subject, idx) => {
              const colors = getColorClasses(subject.color)
              return (
                <motion.div
                  key={subject.subjectId}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border ${colors.border} ${colors.bg} rounded-lg p-4`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl">
                      {subject.subjectId === 'mathematics' && '📐'}
                      {subject.subjectId === 'addMath' && '🧮'}
                      {subject.subjectId === 'physics' && '⚛️'}
                      {subject.subjectId === 'chemistry' && '🧪'}
                      {subject.subjectId === 'biology' && '🧬'}
                      {subject.subjectId === 'islam' && '☪️'}
                      {subject.subjectId === 'sejarah' && '📜'}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm ${colors.text}`}>{subject.subjectBM}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-lg font-bold ${getScoreColor(subject.averageScore)}`}>
                          {subject.averageScore}%
                        </span>
                        <span className="text-xs text-gray-600">{getTrendIcon(subject.trend)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${subject.averageScore}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    {85 - subject.averageScore}% more to reach mastery level
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Strong Areas */}
      {strongSubjects.filter(s => s.averageScore >= 85).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
        >
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
            🏆 Strong Areas - Keep It Up!
          </h3>
          <p className="text-sm text-gray-600 mb-4">You're excelling in these subjects!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strongSubjects.filter(s => s.averageScore >= 85).map((subject, idx) => {
              const colors = getColorClasses(subject.color)
              return (
                <motion.div
                  key={subject.subjectId}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border ${colors.border} ${colors.bg} rounded-lg p-4 text-center`}
                >
                  <div className="text-3xl mb-2">
                    {subject.subjectId === 'mathematics' && '📐'}
                    {subject.subjectId === 'addMath' && '🧮'}
                    {subject.subjectId === 'physics' && '⚛️'}
                    {subject.subjectId === 'chemistry' && '🧪'}
                    {subject.subjectId === 'biology' && '🧬'}
                    {subject.subjectId === 'islam' && '☪️'}
                    {subject.subjectId === 'sejarah' && '📜'}
                  </div>
                  <h4 className={`font-semibold ${colors.text}`}>{subject.subjectBM}</h4>
                  <div className="text-2xl font-bold text-green-600 mt-2">{subject.averageScore}%</div>
                  <div className="text-xs text-gray-600 mt-1">Excellent! 🌟</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Study Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6"
      >
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">💡 Study Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl mb-2">📚</div>
            <h4 className="font-semibold text-gray-900 mb-1">Focus on Weak Areas</h4>
            <p className="text-sm text-gray-600">
              Spend 70% of your study time on subjects below 70% and 30% maintaining strong areas
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-semibold text-gray-900 mb-1">Regular Practice</h4>
            <p className="text-sm text-gray-600">
              Take at least 2-3 quizzes per week to maintain consistency and build confidence
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl mb-2">📝</div>
            <h4 className="font-semibold text-gray-900 mb-1">Review Mistakes</h4>
            <p className="text-sm text-gray-600">
              Use the review feature to understand why you got questions wrong
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-900 mb-1">Set Goals</h4>
            <p className="text-sm text-gray-600">
              Aim to improve each subject by 5-10% every week through focused practice
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
