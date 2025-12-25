'use client'

import { useRouter } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const navigateTo = (tab: string) => {
    router.push(`/?tab=${tab}`)
  }

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-gray-900">EduGen</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your comprehensive SPM quiz platform. Practice, learn, and excel in all subjects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Start Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('insights')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-900">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Mathematics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Add Math
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Physics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Chemistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Biology
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('quiz')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Pendidikan Islam
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Study Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} EduGen. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
              Terms of Service
            </button>
            <button className="text-sm text-gray-500 hover:text-brand-600 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
