// Shared utility functions for subject styling and icons

export function getSubjectIcon(subjectId: string): string {
  const iconMap: Record<string, string> = {
    mathematics: '📐',
    addMath: '🧮',
    physics: '⚛️',
    chemistry: '🧪',
    biology: '🧬',
    sejarah: '📜',
    history: '📜',
    islam: '☪️',
  }
  return iconMap[subjectId] || '📚'
}

export function getSubjectColorClass(
  color: string,
  variant: 'bg' | 'border' | 'text' | 'bg-light'
): string {
  const colorMap: Record<string, Record<string, string>> = {
    mathematics: {
      bg: 'bg-mathematics-500',
      'bg-light': 'bg-mathematics-50',
      border: 'border-mathematics-500',
      text: 'text-mathematics-600',
    },
    addMath: {
      bg: 'bg-mathematics-500',
      'bg-light': 'bg-mathematics-50',
      border: 'border-mathematics-500',
      text: 'text-mathematics-600',
    },
    physics: {
      bg: 'bg-physics-500',
      'bg-light': 'bg-physics-50',
      border: 'border-physics-500',
      text: 'text-physics-600',
    },
    chemistry: {
      bg: 'bg-chemistry-500',
      'bg-light': 'bg-chemistry-50',
      border: 'border-chemistry-500',
      text: 'text-chemistry-600',
    },
    biology: {
      bg: 'bg-biology-500',
      'bg-light': 'bg-biology-50',
      border: 'border-biology-500',
      text: 'text-biology-600',
    },
    sejarah: {
      bg: 'bg-sejarah-500',
      'bg-light': 'bg-sejarah-50',
      border: 'border-sejarah-500',
      text: 'text-sejarah-600',
    },
    islam: {
      bg: 'bg-islam-500',
      'bg-light': 'bg-islam-50',
      border: 'border-islam-500',
      text: 'text-islam-600',
    },
  }
  return colorMap[color]?.[variant] || 'bg-primary-500'
}

export function getSubjectBorderColorHex(color: string): string {
  const colorMap: Record<string, string> = {
    mathematics: '#f59e0b',
    addMath: '#f59e0b',
    physics: '#3b82f6',
    chemistry: '#22c55e',
    biology: '#14b8a6',
    sejarah: '#ef4444',
    islam: '#a855f7',
  }
  return colorMap[color] || '#0ea5e9'
}
