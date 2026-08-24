export const VALID_VERTICALS = ['software', 'electrical', 'mechanical'] as const

export type Vertical = (typeof VALID_VERTICALS)[number]

export interface Task1Submission {
  id?: string
  name: string
  bits_id: string
  email: string
  user_id?: string | null
  vertical: Vertical
  submission_link: string
  notes?: string | null
  submitted_at?: string
}

export interface RecruitmentSettings {
  id?: string
  task1_open: boolean
}

export interface Task1SubmissionStatus {
  task1_open: boolean
  source: 'database' | 'fallback'
}
