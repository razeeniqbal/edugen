'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { QuizResult } from '@/lib/types'

interface StudyStats {
  totalQuizzes: number
  totalQuestions: number
  averageScore: number
  studyStreak: number
  lastStudyDate: string
  totalStudyTime: number // minutes
  strongChapters: string[]
  weekChapters: string[]
}

interface StudyStatsCardProps {
  stats: StudyStats
}

export default function StudyStatsCard({ stats }: StudyStatsCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">📊 Statistik Pembelajaran</h3>
        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          {stats.studyStreak} hari berturut-turut 🔥
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Total Quizzes */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 rounded-lg p-4 border border-blue-200"
        >
          <div className="text-3xl mb-2">📝</div>
          <div className="text-2xl font-bold text-blue-700">{stats.totalQuizzes}</div>
          <div className="text-xs text-blue-600">Quiz Selesai</div>
        </motion.div>

        {/* Total Questions */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-50 rounded-lg p-4 border border-purple-200"
        >
          <div className="text-3xl mb-2">❓</div>
          <div className="text-2xl font-bold text-purple-700">{stats.totalQuestions}</div>
          <div className="text-xs text-purple-600">Soalan Dijawab</div>
        </motion.div>

        {/* Average Score */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-green-50 rounded-lg p-4 border border-green-200"
        >
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-green-700">{stats.averageScore}%</div>
          <div className="text-xs text-green-600">Purata Markah</div>
        </motion.div>

        {/* Study Time */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 rounded-lg p-4 border border-orange-200"
        >
          <div className="text-3xl mb-2">⏱️</div>
          <div className="text-2xl font-bold text-orange-700">{Math.floor(stats.totalStudyTime / 60)}h</div>
          <div className="text-xs text-orange-600">Masa Belajar</div>
        </motion.div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {/* Strong Chapters */}
        {stats.strongChapters.length > 0 && (
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💪</span>
              <span className="font-semibold text-green-800 text-sm">Bab Kuat</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {stats.strongChapters.slice(0, 3).map((chapter, idx) => (
                <span key={idx} className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">
                  {chapter}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Weak Chapters */}
        {stats.weekChapters.length > 0 && (
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📌</span>
              <span className="font-semibold text-red-800 text-sm">Perlu Diperbaiki</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {stats.weekChapters.slice(0, 3).map((chapter, idx) => (
                <span key={idx} className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs">
                  {chapter}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Motivational Message */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700 text-center">
          {stats.averageScore >= 80 ? '🌟 Cemerlang! Teruskan usaha!' :
           stats.averageScore >= 60 ? '💪 Bagus! Sedikit lagi untuk cemerlang!' :
           '📚 Jangan putus asa! Latih lebih banyak untuk meningkatkan markah!'}
        </p>
      </div>
    </div>
  )
}

// Helper function to calculate stats from quiz results
export function calculateStudyStats(quizResults: QuizResult[]): StudyStats {
  const totalQuizzes = quizResults.length

  // Handle both old and new data formats
  const totalQuestions = quizResults.reduce((sum, r) => {
    return sum + (r.totalQuestions || 0)
  }, 0)

  const averageScore = totalQuizzes > 0
    ? Math.round(quizResults.reduce((sum, r) => {
        // New format uses 'score' (already a percentage)
        return sum + (r.score || 0)
      }, 0) / totalQuizzes)
    : 0

  // Calculate study streak
  const sortedDates = quizResults
    .map(r => new Date(r.timestamp))
    .filter(date => !isNaN(date.getTime()))
    .sort((a, b) => b.getTime() - a.getTime())

  let studyStreak = 0
  let currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  for (const date of sortedDates) {
    const quizDate = new Date(date)
    quizDate.setHours(0, 0, 0, 0)

    const daysDiff = Math.floor((currentDate.getTime() - quizDate.getTime()) / (1000 * 60 * 60 * 24))

    if (daysDiff === studyStreak) {
      studyStreak++
    } else if (daysDiff > studyStreak) {
      break
    }
  }

  // Calculate chapter performance
  const chapterPerformance: Record<string, { total: number; correct: number }> = {}

  quizResults.forEach(result => {
    // New format: chapters is an array or number, old format: chapter is string
    const chapterKey = Array.isArray(result.chapters)
      ? `${result.chapters.length} chapter${result.chapters.length > 1 ? 's' : ''}`
      : result.subject || 'Unknown'

    if (!chapterPerformance[chapterKey]) {
      chapterPerformance[chapterKey] = { total: 0, correct: 0 }
    }

    const total = result.totalQuestions || 0
    const correct = result.correctAnswers ?? (result.score && result.totalQuestions ? Math.round((result.score / 100) * result.totalQuestions) : 0)

    chapterPerformance[chapterKey].total += total
    chapterPerformance[chapterKey].correct += correct
  })

  const chapterScores = Object.entries(chapterPerformance)
    .filter(([_, perf]) => perf.total > 0)
    .map(([chapter, perf]) => ({
      chapter,
      percentage: (perf.correct / perf.total) * 100
    }))

  const strongChapters = chapterScores
    .filter(c => c.percentage >= 80)
    .sort((a, b) => b.percentage - a.percentage)
    .map(c => c.chapter)

  const weekChapters = chapterScores
    .filter(c => c.percentage < 60)
    .sort((a, b) => a.percentage - b.percentage)
    .map(c => c.chapter)

  return {
    totalQuizzes,
    totalQuestions,
    averageScore,
    studyStreak,
    lastStudyDate: sortedDates.length > 0 ? sortedDates[0].toISOString() : new Date().toISOString(),
    totalStudyTime: totalQuizzes * 90, // Assuming 90 minutes per quiz
    strongChapters,
    weekChapters
  }
}


