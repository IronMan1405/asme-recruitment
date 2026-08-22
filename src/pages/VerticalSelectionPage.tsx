import { verticals } from '../data/verticals'
import { VerticalCard } from '../components/composite/VerticalCard'

export function VerticalSelectionPage() {
  return (
    <section className="vertical-selection-page" style={{ paddingTop: '1.5rem' }}>
      <div style={{ marginBottom: '3rem', maxWidth: '42rem' }}>
        <span className="section-tag-badge" style={{ marginBottom: '0.6rem' }}>
          RECRUITMENT TRACKS
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, margin: '0 0 0.75rem', letterSpacing: '-0.035em' }}>
          Choose what you want to build.
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.55, margin: 0 }}>
          Every vertical is a different way into engineering. Pick the work that makes you curious, then start with a focused task.
        </p>
      </div>

      <div className="vertical-selection-grid">
        {verticals.map((vertical) => (
          <VerticalCard vertical={vertical} key={vertical.id} />
        ))}
      </div>
    </section>
  )
}