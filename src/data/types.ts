import type { AccentColor } from '../theme/tokens'

export type Difficulty = 'beginner' | 'moderate' | 'intermediate' | 'advanced'

export interface Resource {
  type: 'video' | 'article' | 'documentation' | 'datasheet' | 'textbook' | 'tutorial' | 'other'
  title: string
  url: string
  note: string
}

export interface Task {
  id: string
  taskNumber?: 1 | 2
  verticalId: string
  title: string
  shortDescription: string
  difficulty: Difficulty
  estimatedTime: string
  deadline: string
  prerequisites: string[]
  instructions: string
  resources: { required: Resource[]; optional: Resource[] }
  evaluationCriteria: string[]
  contactdetails: string[]
  submissionUrl?: string
  tags: string[]
}

export interface Vertical {
  id: string
  name: string
  shortDescription: string
  backgroundNeeded: 'beginner-friendly' | 'some-experience-helpful'
  accentColor: AccentColor
  icon: 'gear' | 'chip' | 'terminal' | 'robot'
  exampleDeliverables: string[]
  taskIds: string[]
  contact: string
}