import { SlidersHorizontal } from 'lucide-react'
import type { Difficulty } from '../../data/types'

export type DifficultyFilter = Difficulty | 'all'
export type TaskSort = 'default' | 'shortest' | 'longest'

interface TaskFilterBarProps {
  difficulty: DifficultyFilter
  sort: TaskSort
  onDifficultyChange: (value: DifficultyFilter) => void
  onSortChange: (value: TaskSort) => void
}

export function TaskFilterBar({
  difficulty,
  sort,
  onDifficultyChange,
  onSortChange,
}: TaskFilterBarProps) {
  return (
    <div className="task-filter-bar" aria-label="Filter and sort tasks">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '0.5rem' }}>
        <SlidersHorizontal size={16} color="var(--color-text-muted)" aria-hidden="true" />
        <span className="mono-label" style={{ color: 'var(--color-text)' }}>FILTER & SORT</span>
      </div>

      <label>
        <span className="mono-label">DIFFICULTY:</span>
        <select
          value={difficulty}
          onChange={(event) => onDifficultyChange(event.target.value as DifficultyFilter)}
          aria-label="Filter tasks by difficulty"
        >
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label>
        <span className="mono-label">SORT BY TIME:</span>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as TaskSort)}
          aria-label="Sort tasks by estimated time"
        >
          <option value="default">Default order</option>
          <option value="shortest">Shortest first</option>
          <option value="longest">Longest first</option>
        </select>
      </label>
    </div>
  )
}