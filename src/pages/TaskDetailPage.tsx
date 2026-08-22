import { ArrowLeft, Clock3 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { ExpandableSection } from '../components/primitives/ExpandableSection'
import { DifficultyBadge } from '../components/primitives/DifficultyBadge'
import { TaskNav } from '../components/composite/TaskNav'
import { TaskSection } from '../components/composite/TaskSection'
import { ResourceList } from '../components/composite/ResourceList'
import { SubmissionPanel } from '../components/composite/SubmissionPanel'
import { getTaskById, getVerticalById, getTasksForVertical } from '../lib/data'
import { accentColors } from '../theme/tokens'
import type { CSSProperties } from 'react'

export function TaskDetailPage() {
  const { id = '', taskId = '' } = useParams()
  const task = getTaskById(taskId)
  const vertical = getVerticalById(id)

  if (!task || !vertical || task.verticalId !== vertical.id) {
    return (
      <section className="empty-state">
        <span className="section-tag-badge">TASK NOT FOUND</span>
        <h1>Task not found.</h1>
        <p>That task does not belong to the selected vertical.</p>
        <Link className="primary-button" to="/verticals">
          <ArrowLeft size={16} aria-hidden="true" /> Back to verticals
        </Link>
      </section>
    )
  }

  const verticalTasks = getTasksForVertical(vertical.id)
  const taskIndex = verticalTasks.findIndex((verticalTask) => verticalTask.id === task.id)

  return (
    <article
      className="task-detail-page"
      style={{ '--vertical-accent': accentColors[vertical.accentColor] } as CSSProperties}
    >
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/verticals">Verticals</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to={`/verticals/${vertical.id}`}>{vertical.name}</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current" aria-current="page">
          {task.title}
        </span>
      </nav>

      <header className="task-detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
          <span className="track-pill">{vertical.name}</span>
          <span className="section-tag-badge">{task.id.toUpperCase()}</span>
        </div>
        <h1>{task.title}</h1>
        <p>{task.shortDescription}</p>

        <div className="task-detail-meta">
          <DifficultyBadge difficulty={task.difficulty} />
          <span className="time-estimate">
            <Clock3 size={15} aria-hidden="true" />
            Estimated: ~{task.estimatedTime}
          </span>
          {task.prerequisites.map((prerequisite) => (
            <span className="tag-chip" key={prerequisite}>
              {prerequisite}
            </span>
          ))}
          {task.tags.map((tag) => (
            <span className="tag-chip" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="task-detail-content">
        <TaskSection label="PROBLEM STATEMENT">
          <ReactMarkdown>{task.instructions}</ReactMarkdown>
        </TaskSection>

        {task.prerequisites.length > 0 && (
          <TaskSection label="PREREQUISITES">
            <ul>
              {task.prerequisites.map((prerequisite) => (
                <li key={prerequisite}>{prerequisite}</li>
              ))}
            </ul>
          </TaskSection>
        )}

        {task.evaluationCriteria.length > 0 && (
          <TaskSection label="EVALUATION CRITERIA">
            <ul className="criteria-list">
              {task.evaluationCriteria.map((criterion) => (
                <li key={criterion}>
                  <span className="criteria-checkbox" aria-hidden="true">✓</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </TaskSection>
        )}

        {task.resources.required.length > 0 && (
          <TaskSection label="REQUIRED RESOURCES">
            <ResourceList resources={task.resources.required} />
          </TaskSection>
        )}

        {task.resources.optional.length > 0 && (
          <ExpandableSection label="Want to go further? (Optional Resources)">
            <ResourceList resources={task.resources.optional} />
          </ExpandableSection>
        )}

        <SubmissionPanel submissionUrl={task.submissionUrl} />
      </div>

      <TaskNav
        verticalId={vertical.id}
        previous={taskIndex > 0 ? verticalTasks[taskIndex - 1] : undefined}
        next={taskIndex < verticalTasks.length - 1 ? verticalTasks[taskIndex + 1] : undefined}
      />
    </article>
  )
}