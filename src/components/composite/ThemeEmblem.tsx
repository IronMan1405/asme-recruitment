import type { CSSProperties } from 'react'

interface ThemeEmblemProps {
  variant: 'gotham' | 'stark' | 'cyborg'
}

/**
 * A small CSS-only 3D emblem for the task detail header — an original,
 * theme-appropriate object (medallion / reactor / core prism) built with
 * transform-style: preserve-3d, not a likeness of any copyrighted character.
 */
export function ThemeEmblem({ variant }: ThemeEmblemProps) {
  if (variant === 'gotham') {
    return (
      <span className="emblem-3d emblem-gotham" aria-hidden="true">
        <span className="emblem-3d-spin">
          <span className="emblem-face emblem-face-front">🦇</span>
          <span className="emblem-face emblem-face-back">🦇</span>
        </span>
      </span>
    )
  }

  if (variant === 'stark') {
    return (
      <span className="emblem-3d emblem-stark" aria-hidden="true">
        <span className="reactor-3d">
          <span className="reactor-ring reactor-ring-1" />
          <span className="reactor-ring reactor-ring-2" />
          <span className="reactor-ring reactor-ring-3" />
          <span className="reactor-core" />
        </span>
      </span>
    )
  }

  return (
    <span className="emblem-3d emblem-cyborg" aria-hidden="true">
      <span className="core-prism">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span className="prism-face" style={{ '--i': i } as CSSProperties} key={i} />
        ))}
        <span className="core-glow" />
      </span>
    </span>
  )
}
