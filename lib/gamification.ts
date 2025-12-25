// Gamification system for EduGen

export interface PlayerData {
  level: number
  xp: number
  totalXP: number
  achievements: string[]
  streak: number
  lastPlayDate: string
  badges: Badge[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt?: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  xpReward: number
  condition: (playerData: PlayerData, quizResults: any[]) => boolean
}

// XP required for each level (exponential growth)
export function getXPForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1))
}

// Calculate level from total XP
export function getLevelFromXP(totalXP: number): number {
  let level = 1
  let xpNeeded = 0

  while (totalXP >= xpNeeded + getXPForLevel(level)) {
    xpNeeded += getXPForLevel(level)
    level++
  }

  return level
}

// Calculate XP needed for next level
export function getXPForNextLevel(currentLevel: number, currentTotalXP: number): number {
  let xpNeeded = 0
  for (let i = 1; i < currentLevel; i++) {
    xpNeeded += getXPForLevel(i)
  }
  return xpNeeded + getXPForLevel(currentLevel) - currentTotalXP
}

// Calculate XP earned from quiz
export function calculateQuizXP(score: number, total: number, difficulty: string = 'normal'): number {
  const baseXP = total * 2 // 2 XP per question
  const scoreMultiplier = score / total // 0.0 to 1.0
  const difficultyMultiplier = difficulty === 'hard' ? 1.5 : difficulty === 'easy' ? 0.8 : 1.0

  let bonusXP = 0

  // Perfect score bonus
  if (score === total) {
    bonusXP += 50
  }

  // High score bonus
  if (scoreMultiplier >= 0.8) {
    bonusXP += 20
  }

  return Math.floor(baseXP * scoreMultiplier * difficultyMultiplier + bonusXP)
}

// All available achievements
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_quest',
    name: 'FIRST QUEST',
    description: 'Complete your first quiz',
    icon: '🎮',
    xpReward: 50,
    condition: (_, quizResults) => quizResults.length >= 1
  },
  {
    id: 'perfect_score',
    name: 'FLAWLESS VICTORY',
    description: 'Get 100% on any quiz',
    icon: '⭐',
    xpReward: 100,
    condition: (_, quizResults) => quizResults.some(q => q.score === 100)
  },
  {
    id: 'quiz_master',
    name: 'QUIZ MASTER',
    description: 'Complete 10 quizzes',
    icon: '🏆',
    xpReward: 150,
    condition: (_, quizResults) => quizResults.length >= 10
  },
  {
    id: 'knowledge_seeker',
    name: 'KNOWLEDGE SEEKER',
    description: 'Answer 100 questions',
    icon: '📚',
    xpReward: 100,
    condition: (_, quizResults) => {
      const totalQuestions = quizResults.reduce((sum, r) => sum + (r.totalQuestions || 0), 0)
      return totalQuestions >= 100
    }
  },
  {
    id: 'streak_warrior',
    name: 'STREAK WARRIOR',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    xpReward: 200,
    condition: (playerData) => playerData.streak >= 7
  },
  {
    id: 'ace_student',
    name: 'ACE STUDENT',
    description: 'Get 5 perfect scores',
    icon: '💯',
    xpReward: 250,
    condition: (_, quizResults) => {
      return quizResults.filter(q => q.score === 100).length >= 5
    }
  },
  {
    id: 'multi_subject',
    name: 'POLYMATH',
    description: 'Complete quizzes in 5 different subjects',
    icon: '🌟',
    xpReward: 200,
    condition: (_, quizResults) => {
      const subjects = new Set(quizResults.map(q => q.subjectId))
      return subjects.size >= 5
    }
  },
  {
    id: 'level_10',
    name: 'VETERAN',
    description: 'Reach level 10',
    icon: '⚔️',
    xpReward: 300,
    condition: (playerData) => playerData.level >= 10
  },
  {
    id: 'speed_demon',
    name: 'SPEED DEMON',
    description: 'Complete 3 quizzes in one day',
    icon: '⚡',
    xpReward: 150,
    condition: (_, quizResults) => {
      const today = new Date().toDateString()
      return quizResults.filter(q => new Date(q.timestamp).toDateString() === today).length >= 3
    }
  },
  {
    id: 'comeback_kid',
    name: 'COMEBACK KID',
    description: 'Pass after failing',
    icon: '💪',
    xpReward: 100,
    condition: (_, quizResults) => {
      for (let i = 1; i < quizResults.length; i++) {
        if (quizResults[i].score < 50 && quizResults[i - 1].score >= 50) {
          return true
        }
      }
      return false
    }
  }
]

// Check for newly unlocked achievements
export function checkAchievements(
  playerData: PlayerData,
  quizResults: any[]
): { newAchievements: Achievement[], totalXPGained: number } {
  const newAchievements: Achievement[] = []
  let totalXPGained = 0

  for (const achievement of ACHIEVEMENTS) {
    // Skip if already unlocked
    if (playerData.achievements.includes(achievement.id)) {
      continue
    }

    // Check if condition is met
    if (achievement.condition(playerData, quizResults)) {
      newAchievements.push(achievement)
      totalXPGained += achievement.xpReward
    }
  }

  return { newAchievements, totalXPGained }
}

// Initialize player data
export function initializePlayerData(): PlayerData {
  return {
    level: 1,
    xp: 0,
    totalXP: 0,
    achievements: [],
    streak: 0,
    lastPlayDate: new Date().toISOString(),
    badges: []
  }
}

// Get player data from localStorage
export function getPlayerData(): PlayerData {
  if (typeof window === 'undefined') return initializePlayerData()

  const saved = localStorage.getItem('edugen-player-data')
  if (!saved) {
    const newData = initializePlayerData()
    localStorage.setItem('edugen-player-data', JSON.stringify(newData))
    return newData
  }

  return JSON.parse(saved)
}

// Save player data to localStorage
export function savePlayerData(data: PlayerData): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('edugen-player-data', JSON.stringify(data))
}

// Update player data after quiz completion
export function updatePlayerDataAfterQuiz(
  score: number,
  total: number,
  quizResults: any[]
): { playerData: PlayerData, xpGained: number, leveledUp: boolean, newAchievements: Achievement[] } {
  const playerData = getPlayerData()

  // Calculate XP from quiz
  const quizXP = calculateQuizXP(score, total)

  // Check for new achievements
  const { newAchievements, totalXPGained: achievementXP } = checkAchievements(playerData, quizResults)

  // Total XP gained
  const totalXPGained = quizXP + achievementXP

  // Update XP and level
  const oldLevel = playerData.level
  playerData.totalXP += totalXPGained
  playerData.level = getLevelFromXP(playerData.totalXP)
  playerData.xp = playerData.totalXP - [...Array(playerData.level - 1)].reduce((sum, _, i) => sum + getXPForLevel(i + 1), 0)

  // Add new achievements
  playerData.achievements.push(...newAchievements.map(a => a.id))

  // Update last play date
  playerData.lastPlayDate = new Date().toISOString()

  // Save
  savePlayerData(playerData)

  return {
    playerData,
    xpGained: totalXPGained,
    leveledUp: playerData.level > oldLevel,
    newAchievements
  }
}

// Get rank title based on level
export function getRankTitle(level: number): string {
  if (level >= 50) return 'GRANDMASTER'
  if (level >= 40) return 'MASTER'
  if (level >= 30) return 'EXPERT'
  if (level >= 20) return 'SCHOLAR'
  if (level >= 15) return 'APPRENTICE'
  if (level >= 10) return 'STUDENT'
  if (level >= 5) return 'LEARNER'
  return 'NOVICE'
}
