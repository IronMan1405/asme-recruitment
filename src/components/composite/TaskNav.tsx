import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Task } from '../../data/types'

interface TaskNavProps {
  verticalId: string
  previous?: Task
  next?: Task
}

export function TaskNav({ verticalId, previous, next }: TaskNavProps) {
  if (!previous && !next) return null

  return (
    <nav className="task-nav" aria-label="Task navigation">
      <div>
        {previous && (
          <Link to={`/verticals/${verticalId}/${previous.id}`}>
            <ArrowLeft size={16} aria-hidden="true" />
            <span>
              <small>Previous task</small>
              {previous.title}
            </span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={`/verticals/${verticalId}/${next.id}`}>
            <span>
              <small>Next task</small>
              {next.title}
            </span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </nav>
  )
}