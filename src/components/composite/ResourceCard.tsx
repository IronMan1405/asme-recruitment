import { ArrowUpRight, BookOpen, FileText, FlaskConical, HelpCircle, PlayCircle } from 'lucide-react'
import type { Resource } from '../../data/types'

const icons = {
  video: PlayCircle,
  article: FileText,
  documentation: BookOpen,
  datasheet: FileText,
  textbook: BookOpen,
  tutorial: FlaskConical,
  other: HelpCircle,
}

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = icons[resource.type] || HelpCircle

  return (
    <article className="resource-card">
      <div className="resource-type">
        <Icon size={16} aria-hidden="true" />
        <span className="mono-label">{resource.type}</span>
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.note}</p>
      <a href={resource.url} target="_blank" rel="noreferrer">
        <span>Open resource</span>
        <ArrowUpRight size={14} aria-hidden="true" />
        <span className="sr-only"> in a new tab</span>
      </a>
    </article>
  )
}