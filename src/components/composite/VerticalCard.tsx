import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Vertical } from '../../data/types'
import { accentColors } from '../../theme/tokens'

const verticalImages: Record<string, string> = {
  mechanical: '/mechanical-card.jpg',
  electrical: '/electronics-card.jpg',
  software: '/software-card.jpg',
}

interface VerticalCardProps {
  vertical: Vertical
  compact?: boolean
}

export function VerticalCard({ vertical, compact = false }: VerticalCardProps) {
  const backgroundLabel =
    vertical.backgroundNeeded === 'beginner-friendly'
      ? 'Beginner-friendly'
      : 'Some experience helpful'
  const imageUrl = verticalImages[vertical.id] || '/hero-robot.jpg'

  return (
    <Link
      className={`vertical-card ${compact ? 'vertical-card-compact' : ''}`}
      style={{ '--vertical-accent': accentColors[vertical.accentColor] } as CSSProperties}
      to={`/verticals/${vertical.id}`}
    >
      <div className="vertical-card-media">
        <img src={imageUrl} alt={vertical.name} />
      </div>

      <div className="vertical-card-body">
        <div className="card-topline">
          <span className="track-pill">{vertical.id.toUpperCase()}</span>
          <span className="mono-label" style={{ fontSize: '0.68rem' }}>
            {vertical.taskIds.length} TASK{vertical.taskIds.length === 1 ? '' : 'S'}
          </span>
        </div>

        {compact ? <h3>{vertical.name}</h3> : <h2>{vertical.name}</h2>}

        <p>{vertical.shortDescription}</p>

        <div className="vertical-card-meta">
          <span className="background-badge">{backgroundLabel}</span>
          <span className="card-action-btn">
            <span>Explore</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}