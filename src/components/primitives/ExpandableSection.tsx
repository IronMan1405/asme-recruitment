import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

interface ExpandableSectionProps {
  label: string
  children: ReactNode
}

export function ExpandableSection({ label, children }: ExpandableSectionProps) {
  return (
    <details className="expandable-section">
      <summary>
        <span>{label}</span>
        <ChevronDown size={18} className="expandable-indicator" aria-hidden="true" />
      </summary>
      <div className="expandable-content">{children}</div>
    </details>
  )
}