import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Task } from '../../data/types'

// Get a free access key at https://web3forms.com (enter an email, no signup
// flow) and paste it here — submissions then land straight in that inbox.
// Until it's set, the form still works: it fails over to the mailto link
// below so a submission is never silently lost.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'
const FALLBACK_EMAIL = 'asme@example.com'

interface SubmissionPanelProps {
  task: Task
  verticalName: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function SubmissionPanel({ task, verticalName }: SubmissionPanelProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [notes, setNotes] = useState('')
  const [state, setState] = useState<SubmitState>('idle')

  const mailtoHref = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
    `Submission: ${task.title} (${task.id.toUpperCase()})`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nSubmission link: ${link}\n\nNotes:\n${notes}`
  )}`

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Submission: ${task.title} (${task.id.toUpperCase()})`,
          from_name: 'ASME Recruitment Portal',
          name,
          email,
          submission_link: link,
          notes,
          task_id: task.id,
          task_title: task.title,
          vertical: verticalName,
        }),
      })

      const result = await response.json()
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'Submission failed')
      }
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <section className="submission-panel submission-panel-done">
        <div className="submission-icon submission-icon-success">
          <CheckCircle2 size={22} aria-hidden="true" />
        </div>
        <div className="submission-copy">
          <span
            className="section-tag-badge"
            style={{ color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
          >
            SUBMITTED
          </span>
          <h2>Got it, {name.split(' ')[0] || 'thanks'}!</h2>
          <p>
            Your submission for <strong>{task.title}</strong> is in. We'll follow up at {email} with next steps.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="submission-panel">
      <div className="submission-icon">
        <Send size={22} aria-hidden="true" />
      </div>
      <div className="submission-copy">
        <span
          className="section-tag-badge"
          style={{ color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
        >
          SUBMISSION
        </span>
        <h2>Ready to send your work?</h2>
        <p>
          Submit your demo solution and a short note explaining what you tried and what you would improve next.
        </p>

        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="submission-form-row">
            <label className="submission-field">
              <span>Name</span>
              <input
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                disabled={state === 'submitting'}
              />
            </label>
            <label className="submission-field">
              <span>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                disabled={state === 'submitting'}
              />
            </label>
          </div>

          <label className="submission-field">
            <span>Link to your work</span>
            <input
              type="url"
              required
              value={link}
              onChange={(event) => setLink(event.target.value)}
              placeholder="Link to your Tinkercad / Fusion 360 / GitHub / Google Drive / etc."
              disabled={state === 'submitting'}
            />
          </label>

          <label className="submission-field">
            <span>Notes (optional)</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="What you tried, what you'd improve next..."
              rows={2}
              disabled={state === 'submitting'}
            />
          </label>

          {state === 'error' && (
            <p className="submission-error" role="alert">
              <AlertCircle size={15} aria-hidden="true" />
              <span>
                Something went wrong sending that. Try again, or{' '}
                <a href={mailtoHref}>email us your submission directly</a>.
              </span>
            </p>
          )}

          <button type="submit" className="primary-button" disabled={state === 'submitting'}>
            {state === 'submitting' ? (
              <>
                <Loader2 size={16} className="submission-spinner" aria-hidden="true" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>Submit Your Work</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
