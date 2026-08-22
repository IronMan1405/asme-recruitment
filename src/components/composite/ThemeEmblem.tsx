interface ThemeEmblemProps {
  variant: 'gotham' | 'stark' | 'spiderman'
}

/**
 * A small CSS-only 3D emblem for the task detail header — an original,
 * theme-appropriate object (medallion / reactor) built with
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
    <span className="emblem-3d emblem-spiderman" aria-hidden="true">
      <span className="emblem-3d-spin">
        <span className="emblem-face emblem-face-front">🕸️</span>
        <span className="emblem-face emblem-face-back">🕸️</span>
      </span>
    </span>
  )
}
