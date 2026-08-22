import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { verticals } from '../../data/verticals'
import { VerticalCard } from '../composite/VerticalCard'

export function VerticalPreviewGrid() {
  return (
    <section className="landing-section vertical-preview-section" aria-labelledby="vertical-preview-heading">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-tag-badge">EXPLORE TRACKS</span>
          <h2 id="vertical-preview-heading">Pick a direction. Then make it yours.</h2>
        </div>
        <Link className="text-link" to="/verticals">
          View all verticals <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
      
      <div className="vertical-preview-grid">
        {verticals.map((vertical) => (
          <VerticalCard compact vertical={vertical} key={vertical.id} />
        ))}
      </div>
    </section>
  )
}