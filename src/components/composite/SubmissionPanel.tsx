import { ArrowUpRight, Send } from 'lucide-react'

interface SubmissionPanelProps {
  submissionUrl?: string
}

export function SubmissionPanel({ submissionUrl }: SubmissionPanelProps) {
  return (
    <section className="submission-panel">
      <div className="submission-icon">
        <Send size={22} aria-hidden="true" />
      </div>
      <div className="submission-copy">
        <span className="section-tag-badge" style={{ color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
          SUBMISSION
        </span>
        <h2>Ready to send your work?</h2>
        <p>
          Submit your demo solution and a short note explaining what you tried and what you would improve next.
        </p>
        <span className="submission-format">
          FORMAT: Link or project archive · Verified submission portal
        </span>
      </div>
      {submissionUrl ? (
        <a
          className="primary-button"
          href={submissionUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>Submit Your Work</span>
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> in a new tab</span>
        </a>
      ) : (
        <span className="submission-unavailable">Submission link unavailable</span>
      )}
    </section>
  )
}