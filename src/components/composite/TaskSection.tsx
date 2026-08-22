import type { ReactNode } from 'react'

interface TaskSectionProps {
  label: string
  children: ReactNode
}

export function TaskSection({ label, children }: TaskSectionProps) {
  return (
    <section className="task-section">
      <div className="task-section-header">
        <span className="section-tag-badge">{label}</span>
      </div>
      <div className="task-section-content">{children}</div>
    </section>
  )
}