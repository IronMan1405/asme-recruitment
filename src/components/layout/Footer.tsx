import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import asmeLogo from '../../assets/asme-logo.png'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <img className="footer-logo-mark" src={asmeLogo} alt="ASME BITS Pilani Student Section" />
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
            <a href="https://chat.whatsapp.com/Jjs07RvjI4EBSqMlZkMgfU" target="_blank" rel="noreferrer">
              WhatsApp <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/asme_bitspilani?igsi=MXRsemlwcTRhaGM3MQ==" target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ASME Student Chapter. All rights reserved.</span>
        <span className="mono-label" style={{ color: 'var(--color-text)' }}>
          STATUS: ACTIVE RECRUITMENT
        </span>
      </div>
    </footer>
  )
}