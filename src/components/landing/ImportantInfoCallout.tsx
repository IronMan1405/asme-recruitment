import { ArrowUpRight, Info } from 'lucide-react'

export function ImportantInfoCallout() {
  return (
    <section className="landing-section info-callout" aria-labelledby="info-heading">
      <div className="info-callout-content">
        <div className="info-icon-badge">
          <Info size={22} aria-hidden="true" />
        </div>
        <div>
          <span className="section-tag-badge">KEY INFORMATION</span>
          <h2 id="info-heading">Start where you are.</h2>
          <p>
            These tasks are demo content for the 2026 recruitment cycle. We care about how you think, explain, and iterate, not whether you already know every tool.
          </p>
        </div>
      </div>
      <a className="text-link" href="mailto:asme@example.com">
        Ask a question <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </section>
  )
}