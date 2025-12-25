'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', description: 'View your stats' },
    { id: 'quiz', icon: '📝', label: 'Start Quiz', description: 'Begin a new quiz' },
    { id: 'insights', icon: '💡', label: 'Insights', description: 'Improve your weak areas' },
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0, width: isCollapsed ? '80px' : '280px' }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 shadow-lg z-50 flex flex-col"
    >
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                EduGen
              </h1>
              <p className="text-xs text-gray-500 mt-1">SPM Quiz Platform</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            {!isCollapsed && (
              <div className="text-left flex-1">
                <div className="font-semibold text-sm">{item.label}</div>
                {activeTab !== item.id && (
                  <div className="text-xs opacity-70">{item.description}</div>
                )}
              </div>
            )}
          </button>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 ${
          isCollapsed ? 'justify-center' : ''
        }`}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
            👤
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-900">Student</div>
              <div className="text-xs text-gray-500">Level 1 • Novice</div>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  )
}
