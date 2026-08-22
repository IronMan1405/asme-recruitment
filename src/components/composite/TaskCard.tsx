import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Task } from '../../data/types'
import { DifficultyBadge } from '../primitives/DifficultyBadge'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Link className="task-card" to={`/verticals/${task.verticalId}/${task.id}`}>
      <div className="task-card-main">
        <div className="task-card-header">
          <div className="task-card-title">
            <span className="mono-label">{task.id.toUpperCase()}</span>
            <h3>{task.title}</h3>
          </div>
          <div className="task-card-meta">
            <DifficultyBadge difficulty={task.difficulty} />
            <span className="time-estimate">
              <Clock3 size={14} aria-hidden="true" />
              ~{task.estimatedTime}
            </span>
            <span className="task-deadline">Due: {task.deadline}</span>
          </div>
        </div>

        <p>{task.shortDescription}</p>

        <div className="task-card-footer">
          <div className="task-card-tags">
            {[...task.prerequisites, ...task.tags].map((tag) => (
              <span className="tag-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <span className="task-card-action">
            <span>View task</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}