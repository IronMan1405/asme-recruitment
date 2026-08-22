import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-capsule">
        <div className="capsule-glow-border" aria-hidden="true" />
        
        <nav className="nav-group-left" aria-label="Primary navigation left">
          <NavLink
            to="/"
            className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/verticals"
            className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
          >
            Verticals
          </NavLink>
        </nav>

        <Link className="capsule-brand" to="/" onClick={closeMenu}>
          <span className="brand-glow-dot" aria-hidden="true" />
          <span>ASME</span>
          <span className="brand-badge-year">2026</span>
        </Link>

        <nav className="nav-group-right" aria-label="Primary navigation right">
          <NavLink
            to="/how-it-works"
            className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
          >
            How it works
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
          >
            FAQ
          </NavLink>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="capsule-cta-pill"
          >
            <Sparkles size={13} aria-hidden="true" />
            <span>Join</span>
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        {isOpen && (
          <div className="mobile-menu-drawer">
            <NavLink
              to="/"
              className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/verticals"
              className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              Verticals
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              How it works
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => `capsule-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              FAQ
            </NavLink>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="capsule-cta-pill"
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <Sparkles size={14} aria-hidden="true" />
              <span>Join Discord</span>
            </a>
          </div>
        )}
      </div>
    </header>
  )
}