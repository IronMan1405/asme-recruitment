export const accentColors = {
  mechanical: 'var(--color-steel)',
  electronics: 'var(--color-amber)',
  software: 'var(--color-green)',
  robotics: 'var(--color-violet)',
} as const

export type AccentColor = keyof typeof accentColors

export const difficultyColors = {
  beginner: 'var(--color-difficulty-beginner)',
  moderate: 'var(--color-difficulty-moderate)',
  intermediate: 'var(--color-difficulty-intermediate)',
  advanced: 'var(--color-difficulty-advanced)',
} as const