import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Lock, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { Task } from '../../data/types'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'
import { getTask1SubmissionStatus, hasSubmittedTask1ForVertical, isBitsGoogleEmail, normalizeVertical, submitTask1 } from '../../services/submissions'

interface SubmissionPanelProps {
  task: Task
  verticalName: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function SubmissionPanel({ task, verticalName }: SubmissionPanelProps) {
  const [name, setName] = useState('')
  const [bitsId, setBitsId] = useState('')
  const [link, setLink] = useState('')
  const [notes, setNotes] = useState('')
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmissionOpen, setIsSubmissionOpen] = useState<boolean | null>(null)
  const [authenticatedEmail, setAuthenticatedEmail] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasSubmittedForVertical, setHasSubmittedForVertical] = useState(false)

  const taskVertical = normalizeVertical(task.verticalId || verticalName) ?? normalizeVertical(verticalName) ?? 'software'

  useEffect(() => {
    let isMounted = true

    const loadStatus = async () => {
      try {
        const status = await getTask1SubmissionStatus()
        if (isMounted) {
          setIsSubmissionOpen(status.task1_open)
        }
      } catch {
        if (isMounted) {
          setIsSubmissionOpen(false)
        }
      }
    }

    void loadStatus()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const syncAuthState = async () => {
      if (!isSupabaseConfigured) {
        if (isMounted) {
          setIsAuthenticated(false)
          setAuthenticatedEmail(null)
          setHasSubmittedForVertical(false)
        }
        return
      }

      const {
        data: { session },
      } = await supabase.auth.getSession()

      const currentEmail = session?.user?.email?.trim().toLowerCase() ?? null
      const validBitsEmail = currentEmail && isBitsGoogleEmail(currentEmail) ? currentEmail : null

      if (isMounted) {
        setAuthenticatedEmail(validBitsEmail)
        setIsAuthenticated(Boolean(validBitsEmail))
      }

      if (session?.user && currentEmail && !validBitsEmail) {
        await supabase.auth.signOut()
        if (isMounted) {
          setIsAuthenticated(false)
          setAuthenticatedEmail(null)
          setHasSubmittedForVertical(false)
          setErrorMessage('Only @pilani.bits-pilani.ac.in Google accounts can submit.')
        }
      }
    }

    void syncAuthState()

    const { data: authSubscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentEmail = session?.user?.email?.trim().toLowerCase() ?? null
      const validBitsEmail = currentEmail && isBitsGoogleEmail(currentEmail) ? currentEmail : null

      if (!isMounted) {
        return
      }

      setAuthenticatedEmail(validBitsEmail)
      setIsAuthenticated(Boolean(validBitsEmail))

      if (session?.user && currentEmail && !validBitsEmail) {
        await supabase.auth.signOut()
        setIsAuthenticated(false)
        setAuthenticatedEmail(null)
        setHasSubmittedForVertical(false)
        setErrorMessage('Only @pilani.bits-pilani.ac.in Google accounts can submit.')
      }

      if (!session?.user) {
        setErrorMessage('')
        setHasSubmittedForVertical(false)
      }
    })

    return () => {
      isMounted = false
      authSubscription.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const checkExistingSubmission = async () => {
      if (!isAuthenticated || !authenticatedEmail) {
        if (isMounted) {
          setHasSubmittedForVertical(false)
        }
        return
      }

      try {
        const hasSubmitted = await hasSubmittedTask1ForVertical(authenticatedEmail, taskVertical)
        if (isMounted) {
          setHasSubmittedForVertical(hasSubmitted)
        }
      } catch {
        if (isMounted) {
          setHasSubmittedForVertical(false)
        }
      }
    }

    void checkExistingSubmission()

    return () => {
      isMounted = false
    }
  }, [authenticatedEmail, isAuthenticated, taskVertical])

  const handleGoogleSignIn = async () => {
    if (!isSupabaseConfigured) {
      setErrorMessage('Google sign-in is not configured yet.')
      setState('error')
      return
    }

    setErrorMessage('')
    setState('idle')

    const redirectTo = `${window.location.origin}${window.location.pathname}`

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
          hd: 'pilani.bits-pilani.ac.in',
        },
      },
    })

    if (error) {
      setErrorMessage(error.message)
      setState('error')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (state === 'submitting' || state === 'success') {
      return
    }

    if (isSubmissionOpen === false) {
      setState('error')
      setErrorMessage('Task 1 submissions are currently closed.')
      return
    }

    if (!authenticatedEmail) {
      setState('error')
      setErrorMessage('Please sign in with your BITS Google account before submitting.')
      return
    }

    setState('submitting')
    setErrorMessage('')

    try {
      await submitTask1({
        name,
        bitsId,
        email: authenticatedEmail,
        vertical: taskVertical,
        submissionLink: link,
        notes,
      })

      setState('success')
      setErrorMessage('')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit your work right now. Please try again later.'
      setErrorMessage(message)
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
          <h2>Submission successful!</h2>
          <p>
            Your Task 1 submission has been recorded.
          </p>
        </div>
      </section>
    )
  }

  if (hasSubmittedForVertical) {
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
            VERTICAL LIMIT
          </span>
          <h2>Already submitted for this vertical</h2>
          <p>You have already submitted Task 1 for this vertical.</p>
        </div>
      </section>
    )
  }

  if (isSubmissionOpen === false) {
    return (
      <section className="submission-panel submission-panel-done">
        <div className="submission-icon">
          <Lock size={22} aria-hidden="true" />
        </div>
        <div className="submission-copy">
          <span
            className="section-tag-badge"
            style={{ color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
          >
            SUBMISSIONS CLOSED
          </span>
          <h2>Submissions Closed</h2>
          <p>Task 1 submissions are currently closed.</p>
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

        {!isAuthenticated ? (
          <div className="submission-auth-box">
            <button type="button" className="primary-button" onClick={handleGoogleSignIn}>
              Continue with BITS Email ID
            </button>
            {errorMessage && (
              <p className="submission-error" role="alert">
                <AlertCircle size={15} aria-hidden="true" />
                <span>{errorMessage}</span>
              </p>
            )}
          </div>
        ) : (
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
                <span>BITS ID</span>
                <input
                  type="text"
                  required
                  value={bitsId}
                  onChange={(event) => setBitsId(event.target.value)}
                  placeholder="2024A7PS1234H"
                  disabled={state === 'submitting'}
                />
              </label>
            </div>

            <div className="submission-form-row">
              <div className="submission-field">
                <span>Signed in as</span>
                <input type="text" value={authenticatedEmail ?? ''} readOnly aria-readonly="true" />
              </div>
            </div>

            <label className="submission-field">
              <span>Submission link</span>
              <input
                type="url"
                required
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder="https://example.com"
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
                <span>{errorMessage}</span>
              </p>
            )}

            <button type="submit" className="primary-button" disabled={state === 'submitting' || isSubmissionOpen === null}>
              {state === 'submitting' ? (
                <>
                  <Loader2 size={16} className="submission-spinner" aria-hidden="true" />
                  <span>Submitting…</span>
                </>
              ) : (
                <>
                  <span>Submit Your Work</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
