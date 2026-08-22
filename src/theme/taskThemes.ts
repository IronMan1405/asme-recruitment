export interface TaskTheme {
  /** CSS class applied to .task-detail-page to activate the reskin */
  className: string
  /** Which 3D emblem to render in the header — see ThemeEmblem.tsx */
  variant: 'gotham' | 'stark' | 'cyborg'
  /** Small pill shown next to the vertical/task badges in the header */
  tagline: string
  /** Decorative glyphs for the tagline pill (kept small, so emoji render cleanly) */
  icon: string
}

/**
 * Per-vertical "signature" theme for the task detail page only.
 * Keyed by vertical id — see src/data/verticals.ts.
 */
export const taskThemes: Record<string, TaskTheme> = {
  electronics: {
    className: 'theme-gotham',
    variant: 'gotham',
    tagline: 'Gotham Night Division',
    icon: '🦇 🃏',
  },
  software: {
    className: 'theme-stark',
    variant: 'stark',
    tagline: 'Stark R&D — Mark Protocol',
    icon: '⚡',
  },
  mechanical: {
    className: 'theme-cyborg',
    variant: 'cyborg',
    tagline: 'Cybernetic Core Unit',
    icon: '🦾',
  },
}
