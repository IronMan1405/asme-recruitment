import { ArrowRight, CheckCircle2, Compass, Lightbulb, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const detailedSteps = [
  {
    number: '01',
    title: 'Pick a vertical',
    tagline: 'Find the kind of work that pulls you in.',
    icon: Compass,
    details:
      'Browse through our three primary tracks: Mechanical / CAD, Electronics, and Software. Select the area where you want to build hands-on skills or where you are most curious.',
  },
  {
    number: '02',
    title: 'Pick a task',
    tagline: 'Choose a small, defined problem to solve.',
    icon: Lightbulb,
    details:
      'Each vertical contains entry-level demo challenges designed to take 2-4 hours. Every task includes clear problem constraints, learning resources, and evaluation criteria.',
  },
  {
    number: '03',
    title: 'Complete and submit',
    tagline: 'Build, document, and send us what you made.',
    icon: Send,
    details:
      'Work through the challenge at your own pace. Document your design choices, trade-offs, and what you would improve next, then submit your work through the task link.',
  },
  {
    number: '04',
    title: 'Hear back',
    tagline: 'We will be in touch with next steps.',
    icon: CheckCircle2,
    details:
      'Our team reviews every submission thoroughly. We look for curiosity, problem-solving, and communication rather than perfection. You will receive direct feedback and next steps.',
  },
]

const guidancePoints = [
  {
    title: 'No prior experience required',
    desc: 'Our tasks are intentionally designed so curious first-year students can learn the required concepts through the provided guides and documentation.',
  },
  {
    title: 'Explain your reasoning',
    desc: 'A well-reasoned sketch or clear explanation of why you chose a specific design is worth far more to us than a complicated model without context.',
  },
  {
    title: 'Async and low friction',
    desc: 'You can complete your task anywhere on your own schedule during the recruitment window. Take your time, test your ideas, and submit when ready.',
  },
]

export function HowItWorksPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-header">
        <span className="section-tag-badge" style={{ marginBottom: '0.75rem' }}>
          HOW RECRUITMENT WORKS
        </span>
        <h1>Four steps from curious to building.</h1>
        <p>
          Pick a vertical, choose a task, complete and submit your work, and hear back from us. Our recruitment process is transparent, asynchronous, and designed to evaluate your problem-solving approach.
        </p>
      </header>

      <section className="landing-section" aria-labelledby="steps-detail-heading">
        <div className="section-heading">
          <span className="section-tag-badge">THE ROADMAP</span>
          <h2 id="steps-detail-heading">The 4-Step Process</h2>
        </div>

        <div className="stepper" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {detailedSteps.map((step) => {
            const Icon = step.icon
            return (
              <div className="step" key={step.number}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="step-number">{step.number}</div>
                  <Icon size={18} color="#0a0a0a" aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p style={{ fontWeight: 600, color: '#0a0a0a' }}>{step.tagline}</p>
                <p style={{ fontSize: '0.86rem', color: '#64748b' }}>{step.details}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="landing-section" aria-labelledby="tips-heading">
        <div className="section-heading">
          <span className="section-tag-badge">ADVICE FOR APPLICANTS</span>
          <h2 id="tips-heading">What we look for</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {guidancePoints.map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h3 style={{ fontSize: '1.18rem', color: '#0a0a0a', margin: '0 0 0.5rem', fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ color: '#475467', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: '#ffffff',
          padding: '3rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <span className="section-tag-badge">READY TO START?</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: 0, fontWeight: 800 }}>
          Explore the recruitment tracks
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '34rem', margin: 0, fontSize: '1.05rem' }}>
          Pick a vertical to view available challenges, prerequisites, and resource guides.
        </p>
        <Link className="primary-button" to="/verticals" style={{ marginTop: '0.5rem' }}>
          Browse Verticals <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}