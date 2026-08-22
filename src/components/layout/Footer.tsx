import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-badge">ASME</span>
          <p>
            Built by students who like making things real. Join our engineering teams and build something that actually moves.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <span className="mono-label">EXPLORE</span>
            <Link to="/verticals">Verticals</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-col">
            <span className="mono-label">COMMUNITY</span>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              Discord <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ASME Student Chapter. All rights reserved.</span>
        <span className="mono-label" style={{ color: '#0a0a0a' }}>
          STATUS: ACTIVE RECRUITMENT
        </span>
      </div>
    </footer>
  )
}