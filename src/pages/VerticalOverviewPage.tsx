import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { TaskCard } from '../components/composite/TaskCard'
import { TaskFilterBar } from '../components/composite/TaskFilterBar'
import type { DifficultyFilter, TaskSort } from '../components/composite/TaskFilterBar'
import { getTasksForVertical, getVerticalById } from '../lib/data'
import { accentColors } from '../theme/tokens'

const verticalImages: Record<string, string> = {
  mechanical: '/mechanical-card.jpg',
  electronics: '/electronics-card.jpg',
  software: '/software-card.jpg',
}

export function VerticalOverviewPage() {
  const { id = '' } = useParams()
  const vertical = getVerticalById(id)
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [sort, setSort] = useState<TaskSort>('default')

  const allTasks = useMemo(() => {
    return vertical ? getTasksForVertical(vertical.id) : []
  }, [vertical])

  const visibleTasks = useMemo(() => {
    if (!vertical) return []
    const filtered = allTasks.filter(
      (task) => difficulty === 'all' || task.difficulty === difficulty
    )
    return [...filtered].sort((first, second) => {
      if (sort === 'default') return 0
      const firstHours = Number.parseFloat(first.estimatedTime)
      const secondHours = Number.parseFloat(second.estimatedTime)
      return sort === 'shortest' ? firstHours - secondHours : secondHours - firstHours
    })
  }, [allTasks, difficulty, sort, vertical])

  if (!vertical) {
    return (
      <section className="empty-state">
        <span className="section-tag-badge">VERTICAL NOT FOUND</span>
        <h1>Vertical not found.</h1>
        <p>That route does not match a current recruitment vertical.</p>
        <Link className="primary-button" to="/verticals">
          <ArrowLeft size={16} aria-hidden="true" /> Back to verticals
        </Link>
      </section>
    )
  }

  const backgroundLabel =
    vertical.backgroundNeeded === 'beginner-friendly'
      ? 'Beginner-friendly'
      : 'Some experience helpful'
  const imageUrl = verticalImages[vertical.id] || '/hero-robot.jpg'

  return (
    <section
      className="vertical-overview-page"
      style={{ '--vertical-accent': accentColors[vertical.accentColor] } as CSSProperties}
    >
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/verticals">Verticals</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current" aria-current="page">
          {vertical.name}
        </span>
      </nav>

      {/* Product Banner */}
      <header className="vertical-overview-banner">
        <div className="vertical-banner-content">
          <span className="track-pill">{vertical.id.toUpperCase()}</span>
          <h1>{vertical.name}</h1>
          <p>{vertical.shortDescription}</p>
          <div className="vertical-banner-meta">
            <span className="background-badge">{backgroundLabel}</span>
            <span className="section-tag-badge">
              {vertical.taskIds.length} TASK{vertical.taskIds.length === 1 ? '' : 'S'} AVAILABLE
            </span>
          </div>
        </div>

        <div className="vertical-banner-image-box">
          <img src={imageUrl} alt={vertical.name} />
        </div>
      </header>

      <section className="vertical-contact-section" aria-label={`${vertical.name} contact`}>
        <span className="section-tag-badge">CONTACT</span>
        <span>{vertical.contact}</span>
      </section>

      <div className="task-list-heading">
        <div>
          <span className="section-tag-badge">AVAILABLE CHALLENGES</span>
          <h2>Choose a starting point.</h2>
        </div>
        <span className="task-result-count">
          {visibleTasks.length} of {allTasks.length} tasks shown
        </span>
      </div>

      <TaskFilterBar
        difficulty={difficulty}
        sort={sort}
        onDifficultyChange={setDifficulty}
        onSortChange={setSort}
      />

      {visibleTasks.length > 0 ? (
        <div className="task-list">
          {visibleTasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state empty-state-inline">
          <h3>No tasks match this filter.</h3>
          <p>Try showing all difficulty levels to see available challenges.</p>
        </div>
      )}
    </section>
  )
}