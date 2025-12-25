'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PlayerData, getXPForNextLevel, getRankTitle, ACHIEVEMENTS } from '@/lib/gamification'

interface PlayerStatsCardProps {
  playerData: PlayerData
}

export default function PlayerStatsCard({ playerData }: PlayerStatsCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const xpForNext = getXPForNextLevel(playerData.level, playerData.totalXP)
  const xpProgress = (playerData.xp / (playerData.xp + xpForNext)) * 100
  const rankTitle = getRankTitle(playerData.level)

  // Get unlocked achievements
  const unlockedAchievements = ACHIEVEMENTS.filter(a =>
    playerData.achievements.includes(a.id)
  )

  const lockedAchievements = ACHIEVEMENTS.filter(a =>
    !playerData.achievements.includes(a.id)
  )

  return (
    <div className="space-y-6">
      {/* Player Level Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-retro-black border-4 border-retro-magenta crt-screen p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-pixel text-retro-magenta mb-2 leading-relaxed">
              LEVEL {playerData.level}
            </h3>
            <p className="text-xl font-retro text-retro-cyan">{rankTitle}</p>
          </div>
          <div className="text-6xl pixel-art">👤</div>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-pixel text-retro-green">XP</span>
            <span className="text-sm font-pixel text-retro-yellow">
              {playerData.xp} / {playerData.xp + xpForNext}
            </span>
          </div>
          <div className="h-6 bg-retro-gray border-2 border-retro-cyan relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-retro-cyan to-retro-magenta relative"
            >
              {/* Animated scanline effect on XP bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </motion.div>
          </div>
        </div>

        <p className="text-sm font-retro text-retro-green text-center">
          &gt; {xpForNext} XP TO NEXT LEVEL
        </p>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-retro-black border-4 border-retro-yellow crt-screen p-6"
      >
        <h3 className="text-2xl font-pixel text-retro-yellow mb-6 leading-relaxed">
          ACHIEVEMENTS
        </h3>

        {/* Achievement Stats */}
        <div className="mb-6 p-4 bg-retro-gray border-2 border-retro-cyan">
          <div className="text-center">
            <span className="text-4xl font-pixel text-retro-cyan">
              {unlockedAchievements.length}
            </span>
            <span className="text-2xl font-pixel text-retro-green">
              /{ACHIEVEMENTS.length}
            </span>
            <p className="text-sm font-retro text-retro-green mt-2">UNLOCKED</p>
          </div>
        </div>

        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-pixel text-retro-green mb-3">UNLOCKED:</h4>
            <div className="grid grid-cols-2 gap-3">
              {unlockedAchievements.slice(0, 6).map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-retro-gray border-2 border-retro-green p-3 hover:bg-retro-green hover:text-retro-black transition-all cursor-pointer group"
                  title={achievement.description}
                >
                  <div className="text-3xl mb-2 text-center pixel-art">{achievement.icon}</div>
                  <p className="text-xs font-pixel text-retro-green group-hover:text-retro-black text-center leading-relaxed">
                    {achievement.name}
                  </p>
                </motion.div>
              ))}
            </div>
            {unlockedAchievements.length > 6 && (
              <p className="text-xs font-retro text-retro-cyan mt-3 text-center">
                +{unlockedAchievements.length - 6} more...
              </p>
            )}
          </div>
        )}

        {/* Locked Achievements Preview */}
        {lockedAchievements.length > 0 && (
          <div>
            <h4 className="text-sm font-pixel text-retro-cyan mb-3">LOCKED:</h4>
            <div className="grid grid-cols-2 gap-3">
              {lockedAchievements.slice(0, 4).map((achievement, idx) => (
                <div
                  key={achievement.id}
                  className="bg-retro-gray border-2 border-retro-gray p-3 opacity-50 cursor-help"
                  title={achievement.description}
                >
                  <div className="text-3xl mb-2 text-center grayscale">❓</div>
                  <p className="text-xs font-pixel text-retro-gray text-center leading-relaxed">
                    ???
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Total Stats */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-retro-black border-4 border-retro-green crt-screen p-6"
      >
        <h3 className="text-xl font-pixel text-retro-green mb-4 leading-relaxed">
          TOTAL_STATS:
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-retro-gray">
            <span className="font-retro text-lg text-retro-cyan">TOTAL XP:</span>
            <span className="font-pixel text-lg text-retro-yellow">{playerData.totalXP}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-retro-gray">
            <span className="font-retro text-lg text-retro-cyan">STREAK:</span>
            <span className="font-pixel text-lg text-retro-red">{playerData.streak} 🔥</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-retro-gray">
            <span className="font-retro text-lg text-retro-cyan">RANK:</span>
            <span className="font-pixel text-lg text-retro-magenta">{rankTitle}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
