'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingModal from '@/components/LoadingModal'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import InsightsCard from '@/components/InsightsCard'
import { calculateStudyStats } from '@/components/StudyStatsCard'
import { getAllSubjects, getSubjectTopicsByForm, type Subject } from '@/lib/subjects-config'
import { QuizResult } from '@/lib/types'
import { getSubjectColorClass, getSubjectBorderColorHex } from '@/lib/subject-utils'

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State management
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedForm, setSelectedForm] = useState<number>(4)
  const [selectedChapters, setSelectedChapters] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'quiz' | 'insights'>('quiz')
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('edugen-quiz-results')
    if (saved) {
      setQuizResults(JSON.parse(saved))
    }
    const tab = searchParams.get('tab')
    if (tab === 'quiz' || tab === 'insights') {
      setActiveTab(tab as any)
    }
  }, [searchParams])

  const stats = quizResults.length > 0 ? calculateStudyStats(quizResults) : null
  const allSubjects = getAllSubjects()

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setSelectedForm(4)
    setSelectedChapters([])
    setError('')
  }

  const handleChapterToggle = (chapterId: string) => {
    setSelectedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  const handleSelectAllChapters = () => {
    if (!selectedSubject) return
    const formTopics = getSubjectTopicsByForm(selectedSubject.id, selectedForm)
    const allChapterIds = formTopics.map(t => t.chapter)
    setSelectedChapters(allChapterIds)
  }

  const handleDeselectAllChapters = () => {
    setSelectedChapters([])
  }

  const handleGenerateQuestions = async () => {
    if (!selectedSubject) {
      setError('Please select a subject')
      return
    }

    if (selectedChapters.length === 0) {
      setError('Please select at least one chapter')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await axios.post('/api/generate-questions', {
        subject: selectedSubject.id,
        educationLevel: `form-${selectedForm}`,
        selectedChapters,
        form: selectedForm,
        text: 'SPM chapter practice'
      })

      // Store questions in session storage
      sessionStorage.setItem('quiz-questions', JSON.stringify(response.data.questions))
      sessionStorage.setItem('quiz-metadata', JSON.stringify({
        subject: selectedSubject.id,
        subjectName: selectedSubject.name,
        subjectNameBM: selectedSubject.nameBM,
        form: selectedForm,
        chapters: selectedChapters.length,
        color: selectedSubject.color,
        timestamp: new Date().toISOString()
      }))

      router.push('/quiz')
    } catch (err) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || 'Failed to generate questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formTopics = selectedSubject ? getSubjectTopicsByForm(selectedSubject.id, selectedForm) : []

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-blue-50">
      <LoadingModal isOpen={loading} message="Generating your quiz questions..." />

      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as any)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-[280px] flex flex-col">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="lg:ml-0 ml-14">
                <h1 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  {activeTab === 'quiz' && '📝 Start Quiz'}
                  {activeTab === 'insights' && '💡 Insights'}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {activeTab === 'quiz' && 'Choose a subject and begin your quiz'}
                  {activeTab === 'insights' && 'Identify areas for improvement and track your progress'}
                </p>
              </div>
            </div>
          </div>
        </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'quiz' ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subject Selection */}
              {!selectedSubject ? (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allSubjects.map((subject) => (
                      <motion.button
                        key={subject.id}
                        onClick={() => handleSubjectSelect(subject)}
                        className="p-6 bg-white rounded-2xl border-2 text-left hover-lift shadow-md"
                        style={{
                          borderColor: getSubjectBorderColorHex(subject.color),
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-5xl mb-4">{subject.icon}</div>
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{subject.nameBM}</h3>
                        <p className="text-sm text-gray-600 mb-1">{subject.name}</p>
                        <p className="text-sm text-gray-500">{subject.descriptionBM}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chapter Selection */
                <div>
                  <button
                    onClick={() => setSelectedSubject(null)}
                    className="mb-6 flex items-center gap-2 text-brand-600 hover:text-brand-700 transition font-medium px-4 py-2 rounded-lg hover:bg-brand-50"
                  >
                    <span>←</span> Back to Subjects
                  </button>

                  <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-6 border border-gray-200">
                    <div className="flex items-start gap-3 sm:gap-4 mb-6">
                      <div className="text-4xl sm:text-6xl">{selectedSubject.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-3xl font-heading font-bold text-gray-900 mb-2 break-words">{selectedSubject.nameBM}</h2>
                        <p className="text-sm sm:text-lg text-gray-600">{selectedSubject.name}</p>
                        <p className="text-xs sm:text-base text-gray-500 mt-2">{selectedSubject.description}</p>
                      </div>
                    </div>

                    {/* Form Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Select Form Level</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => { setSelectedForm(4); setSelectedChapters([]) }}
                          style={selectedForm === 4 ? {
                            backgroundColor: getSubjectBorderColorHex(selectedSubject.color),
                            color: 'white'
                          } : {}}
                          className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base font-medium transition-all shadow-md ${
                            selectedForm === 4
                              ? ''
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Form 4
                        </button>
                        <button
                          onClick={() => { setSelectedForm(5); setSelectedChapters([]) }}
                          style={selectedForm === 5 ? {
                            backgroundColor: getSubjectBorderColorHex(selectedSubject.color),
                            color: 'white'
                          } : {}}
                          className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base font-medium transition-all shadow-md ${
                            selectedForm === 5
                              ? ''
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Form 5
                        </button>
                      </div>
                    </div>

                    {/* Chapter Selection */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Select Chapters ({selectedChapters.length} selected)
                        </label>
                        <div className="flex gap-2 text-xs sm:text-sm">
                          <button
                            onClick={handleSelectAllChapters}
                            className="text-primary-600 hover:text-primary-700 font-medium"
                          >
                            Select All
                          </button>
                          <span className="text-slate-300">|</span>
                          <button
                            onClick={handleDeselectAllChapters}
                            className="text-slate-600 hover:text-slate-700 font-medium"
                          >
                            Deselect All
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {formTopics.map((topic) => {
                          const isSelected = selectedChapters.includes(topic.chapter)
                          return (
                            <button
                              key={topic.chapter}
                              onClick={() => handleChapterToggle(topic.chapter)}
                              style={isSelected ? {
                                borderColor: getSubjectBorderColorHex(selectedSubject.color),
                                backgroundColor: isSelected ? `${getSubjectBorderColorHex(selectedSubject.color)}10` : 'white'
                              } : {}}
                              className={`p-4 rounded-xl border-2 text-left transition-all ${
                                isSelected ? '' : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-900 mb-1">{topic.title}</h4>
                                  <p className="text-sm text-slate-500">
                                    {topic.keyTopics.slice(0, 2).join(', ')}
                                    {topic.keyTopics.length > 2 && '...'}
                                  </p>
                                </div>
                                <div
                                  style={isSelected ? {
                                    borderColor: getSubjectBorderColorHex(selectedSubject.color),
                                    backgroundColor: getSubjectBorderColorHex(selectedSubject.color)
                                  } : {}}
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    isSelected ? '' : 'border-slate-300'
                                  }`}
                                >
                                  {isSelected && (
                                    <span className="text-white text-sm">✓</span>
                                  )}
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                        {error}
                      </div>
                    )}

                    {/* Generate Button */}
                    <button
                      onClick={handleGenerateQuestions}
                      disabled={selectedChapters.length === 0 || loading}
                      style={selectedChapters.length > 0 && !loading ? {
                        backgroundColor: getSubjectBorderColorHex(selectedSubject.color),
                        color: 'white'
                      } : {}}
                      className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedChapters.length > 0 && !loading
                          ? 'hover:opacity-90 shadow-lg hover:shadow-xl'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Generate 40 Questions →
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Insights Page */
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {quizResults.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
                  <div className="text-6xl mb-4">💡</div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">No Data Yet</h3>
                  <p className="text-gray-600 mb-6">Take some quizzes to see personalized insights!</p>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Start Your First Quiz
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <InsightsCard quizResults={quizResults} />

                  {/* Recent Quizzes with Review */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Recent Quizzes</h3>
                    <div className="space-y-3">
                      {quizResults.slice(0, 10).map((result, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">
                              {result.subject || 'Quiz'} - Form {result.form || '4'}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                              {new Date(result.timestamp).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                            <div className="text-right">
                              <div className={`text-xl sm:text-2xl font-bold ${result.score >= 50 ? 'text-green-600' : 'text-red-600'}`}>
                                {result.score}%
                              </div>
                              <div className="text-xs sm:text-sm text-gray-500">
                                {result.correctAnswers}/{result.totalQuestions}
                              </div>
                            </div>
                            {result.questions && result.userAnswers && (
                              <button
                                onClick={() => {
                                  sessionStorage.setItem('review-quiz', JSON.stringify(result))
                                  router.push('/review')
                                }}
                                className="px-3 sm:px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs sm:text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                              >
                                Review
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
