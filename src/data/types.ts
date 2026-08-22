import type { AccentColor } from '../theme/tokens'

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Resource {
  type: 'video' | 'article' | 'documentation' | 'datasheet' | 'textbook' | 'tutorial' | 'other'
  title: string
  url: string
  note: string
}

export interface Task {
  id: string
  verticalId: string
  title: string
  shortDescription: string
  difficulty: Difficulty
  estimatedTime: string
  prerequisites: string[]
  instructions: string
  resources: { required: Resource[]; optional: Resource[] }
  evaluationCriteria: string[]
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
}