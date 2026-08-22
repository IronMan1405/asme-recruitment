import type { Difficulty } from '../../data/types'
import type { CSSProperties } from 'react'
import { difficultyColors } from '../../theme/tokens'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

const labels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  moderate: 'Moderate',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return (
    <span
      className="difficulty-badge"
      style={{ '--difficulty-color': difficultyColors[difficulty] } as CSSProperties}
    >
      <span className="difficulty-dot" aria-hidden="true" />
      {labels[difficulty]}
    </span>
  )
}