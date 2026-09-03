import { supabase, isSupabaseConfigured } from '../lib/supabase'
import type { RecruitmentSettings, Task1Submission, Task1SubmissionStatus, Task2Submission, Task2SubmissionStatus, Vertical } from '../types/submission'

export const VALID_VERTICALS = ['software', 'electrical', 'mechanical'] as const
export type Task1Vertical = (typeof VALID_VERTICALS)[number]

export const isValidVertical = (value: string): value is Vertical =>
  VALID_VERTICALS.includes(value as Vertical)

export const normalizeVertical = (value: string): Vertical | null => {
  const normalized = value.trim().toLowerCase()
  if (normalized === 'electronics') return 'electrical'
  return isValidVertical(normalized) ? normalized : null
}

export const validateRequiredString = (value: string, label: string) => {
  if (!value || !value.trim()) {
    throw new Error(`${label} is required.`)
  }
}

export const validateEmail = (email: string) => {
  const trimmed = email.trim()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(trimmed)) {
    throw new Error('Please enter a valid email address.')
  }

  return trimmed
}

export const isBitsGoogleEmail = (email?: string | null): boolean => {
  const normalized = email?.trim().toLowerCase() ?? ''
  return normalized.endsWith('@pilani.bits-pilani.ac.in')
}

export const getAuthenticatedTask1User = async () => {
  const { data, error } = await supabase.auth.getUser()

  if (error || !data.user) {
    throw new Error('Please sign in with your BITS Google account to continue.')
  }

  const userEmail = data.user.email?.trim().toLowerCase() ?? ''
  if (!isBitsGoogleEmail(userEmail)) {
    throw new Error('Only @pilani.bits-pilani.ac.in Google accounts can submit.')
  }

  return {
    user: data.user,
    email: userEmail,
  }
}

export const hasSubmittedTask1ForVertical = async (email: string, vertical: string): Promise<boolean> => {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedVertical = normalizeVertical(vertical)

  if (!normalizedVertical || !normalizedEmail) {
    return false
  }

  const { data, error } = await supabase
    .from('task1_submissions')
    .select('id')
    .eq('email', normalizedEmail)
    .eq('vertical', normalizedVertical)
    .limit(1)

  if (error) {
    console.error('Task 1 vertical duplicate check failed:', error)
    return false
  }

  return (data?.length ?? 0) > 0
}

export const validateSubmissionLink = (url: string) => {
  try {
    const parsed = new URL(url)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Submission link must use http or https.')
    }
    return parsed.toString()
  } catch {
    throw new Error('Please enter a valid submission URL.')
  }
}

export const getTask1SubmissionStatus = async (): Promise<Task1SubmissionStatus> => {
  if (!isSupabaseConfigured) {
    return { task1_open: false, source: 'fallback' }
  }

  const { data, error } = await supabase
    .from('recruitment_settings')
    .select('task1_open')
    .order('id', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Failed to load recruitment setting:', error.message)
    return { task1_open: false, source: 'fallback' }
  }

  return {
    task1_open: Boolean(data?.task1_open ?? false),
    source: 'database',
  }
}

export const submitTask1 = async (payload: {
  name: string
  bitsId: string
  email?: string
  vertical: string
  submissionLink: string
  notes?: string
}) => {
  const name = payload.name.trim()
  const bitsId = payload.bitsId.trim()
  const vertical = normalizeVertical(payload.vertical)
  const submissionLink = validateSubmissionLink(payload.submissionLink)

  validateRequiredString(name, 'Name')
  validateRequiredString(bitsId, 'BITS ID')

  if (!vertical) {
    throw new Error('Selected vertical is invalid.')
  }

  if (!isSupabaseConfigured) {
    throw new Error('Task 1 submissions are currently unavailable.')
  }

  const response = await getTask1SubmissionStatus()
  if (!response.task1_open) {
    throw new Error('Task 1 submissions are currently closed.')
  }

  const authenticatedUser = await getAuthenticatedTask1User()

  const { data: existingSubmission, error: duplicateCheckError } = await supabase
    .from('task1_submissions')
    .select('id')
    .eq('email', authenticatedUser.email)
    .eq('vertical', vertical)
    .limit(1)

  if (duplicateCheckError) {
    console.error('Task 1 duplicate check failed:', duplicateCheckError)
    throw new Error('Unable to submit your work right now. Please try again later.')
  }

  if ((existingSubmission?.length ?? 0) > 0) {
    throw new Error('You have already submitted Task 1 for this vertical.')
  }

  const email = authenticatedUser.email
  const trimmedEmail = validateEmail(email)

  const submission: Task1Submission = {
    name,
    bits_id: bitsId,
    email: trimmedEmail,
    user_id: authenticatedUser.user.id,
    vertical,
    submission_link: submissionLink,
    notes: payload.notes?.trim() || null,
  }

  const { error } = await supabase.from('task1_submissions').insert(submission)

  if (error) {
    const lowerMessage = error.message.toLowerCase()

    if (lowerMessage.includes('closed') || lowerMessage.includes('currently closed')) {
      throw new Error('Task 1 submissions are currently closed.')
    }

    if (
      lowerMessage.includes('duplicate') ||
      lowerMessage.includes('already') ||
      lowerMessage.includes('unique constraint') ||
      lowerMessage.includes('violates unique constraint')
    ) {
      throw new Error('You have already submitted Task 1 for this vertical.')
    }

    console.error('Task 1 submission insert failed:', error)
    throw new Error('Unable to submit your work right now. Please try again later.')
  }

  return true
}

export const isTask1SubmissionOpen = async (): Promise<boolean> => {
  const status = await getTask1SubmissionStatus()
  return status.task1_open
}

export const makeTask1OpenState = (task1Open: boolean): RecruitmentSettings => ({
  task1_open: task1Open,
})

export const hasSubmittedTask2ForVertical = async (email: string, vertical: string): Promise<boolean> => {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedVertical = normalizeVertical(vertical)
  if (!normalizedVertical || !normalizedEmail) return false

  const { data, error } = await supabase
    .from('task2_submissions')
    .select('id')
    .eq('email', normalizedEmail)
    .eq('vertical', normalizedVertical)
    .limit(1)

  if (error) {
    console.error('Task 2 vertical duplicate check failed:', error)
    return false
  }
  return (data?.length ?? 0) > 0
}

export const getTask2SubmissionStatus = async (): Promise<Task2SubmissionStatus> => {
  if (!isSupabaseConfigured) return { task2_open: false, source: 'fallback' }

  const { data, error } = await supabase
    .from('recruitment_settings')
    .select('task2_open')
    .order('id', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Failed to load Task 2 recruitment setting:', error.message)
    return { task2_open: false, source: 'fallback' }
  }
  return { task2_open: Boolean(data?.task2_open ?? false), source: 'database' }
}

export const submitTask2 = async (payload: {
  name: string
  bitsId: string
  vertical: string
  submissionLink: string
  notes?: string
}) => {
  const name = payload.name.trim()
  const bitsId = payload.bitsId.trim()
  const vertical = normalizeVertical(payload.vertical)
  const submissionLink = validateSubmissionLink(payload.submissionLink)
  validateRequiredString(name, 'Name')
  validateRequiredString(bitsId, 'BITS ID')
  if (!vertical) throw new Error('Selected vertical is invalid.')
  if (!isSupabaseConfigured) throw new Error('Task 2 submissions are currently unavailable.')

  const response = await getTask2SubmissionStatus()
  if (!response.task2_open) throw new Error('Task 2 submissions are currently closed.')
  const authenticatedUser = await getAuthenticatedTask1User()
  const { data: existingSubmission, error: duplicateCheckError } = await supabase
    .from('task2_submissions')
    .select('id')
    .eq('email', authenticatedUser.email)
    .eq('vertical', vertical)
    .limit(1)

  if (duplicateCheckError) {
    console.error('Task 2 duplicate check failed:', duplicateCheckError)
    throw new Error('Unable to submit your work right now. Please try again later.')
  }
  if ((existingSubmission?.length ?? 0) > 0) throw new Error('You have already submitted Task 2 for this vertical.')

  const submission: Task2Submission = {
    name,
    bits_id: bitsId,
    email: validateEmail(authenticatedUser.email),
    user_id: authenticatedUser.user.id,
    vertical,
    submission_link: submissionLink,
    notes: payload.notes?.trim() || null,
  }
  const { error } = await supabase.from('task2_submissions').insert(submission)
  if (error) {
    const lowerMessage = error.message.toLowerCase()
    if (lowerMessage.includes('closed')) throw new Error('Task 2 submissions are currently closed.')
    if (lowerMessage.includes('duplicate') || lowerMessage.includes('already') || lowerMessage.includes('unique constraint')) {
      throw new Error('You have already submitted Task 2 for this vertical.')
    }
    console.error('Task 2 submission insert failed:', error)
    throw new Error('Unable to submit your work right now. Please try again later.')
  }
  return true
}
