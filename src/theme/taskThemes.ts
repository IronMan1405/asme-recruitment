export interface TaskTheme {
  /** CSS class applied to .task-detail-page to activate the reskin */
  className: string
  /** Which 3D emblem to render in the header — see ThemeEmblem.tsx */
  variant: 'gotham' | 'stark' | 'spiderman'
  /** Small pill shown next to the vertical/task badges in the header */
  tagline: string
  /** Decorative glyphs for the tagline pill (kept small, so emoji render cleanly) */
  icon: string
  /** Accessible label for themed header artwork */
  imageAlt: string
}

/**
 * Per-vertical "signature" theme for the task detail page only.
 * Keyed by vertical id — see src/data/verticals.ts.
 */
export const taskThemes: Record<string, TaskTheme> = {
  electrical: {
    className: 'theme-gotham',
    variant: 'gotham',
    tagline: 'Gotham Night Division',
    icon: '🦇 🃏',
    imageAlt: 'Gotham electrical task artwork',
  },
  electricalTaskTwo: {
    className: 'theme-spiderman theme-electrical-task2',
    variant: 'spiderman',
    tagline: 'Web-Slinger Circuit Division',
    icon: '🕸️',
    imageAlt: 'Spiderman - Electrical Task 2',
  },
  software: {
    className: 'theme-stark',
    variant: 'stark',
    tagline: 'Stark R&D — Mark Protocol',
    icon: '⚡',
    imageAlt: 'Stark software task artwork',
  },
  mechanical: {
    className: 'theme-spiderman',
    variant: 'spiderman',
    tagline: 'Web-Slinger Ops Division',
    icon: '🕸️',
    imageAlt: 'Spider-Man mechanical task artwork',
  },
}
