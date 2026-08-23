import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import asmeLogo from '../../assets/asme-logo.png'
import { ThemeToggle } from '../composite/ThemeToggle'

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
    const timer = window.setTimeout(() => {
      setIsOpen(false)
    }, 0)

    return () => window.clearTimeout(timer)
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
          <img className="capsule-brand-mark" src={asmeLogo} alt="" aria-hidden="true" />
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
          <ThemeToggle />
          <a
            href="https://chat.whatsapp.com/Jjs07RvjI4EBSqMlZkMgfU"
            target="_blank"
            rel="noreferrer"
            className="capsule-cta-pill"
          >
            <MessageCircle size={13} aria-hidden="true" />
            <span>Join</span>
          </a>
          <a
            href="https://www.instagram.com/asme_bitspilani?igsi=MXRsemlwcTRhaGM3MQ=="
            target="_blank"
            rel="noreferrer"
            className="capsule-link"
            aria-label="Visit ASME BITS Pilani on Instagram"
          >
            <span>Instagram</span>
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
            <ThemeToggle showLabel />
            <a
              href="https://chat.whatsapp.com/Jjs07RvjI4EBSqMlZkMgfU"
              target="_blank"
              rel="noreferrer"
              className="capsule-cta-pill"
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <MessageCircle size={14} aria-hidden="true" />
              <span>Join WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/asme_bitspilani?igsi=MXRsemlwcTRhaGM3MQ=="
              target="_blank"
              rel="noreferrer"
              className="capsule-link"
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
              aria-label="Visit ASME BITS Pilani on Instagram"
            >
              <span>Instagram</span>
            </a>
          </div>
        )}
      </div>
    </header>
  )
}