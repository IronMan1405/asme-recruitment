import { ArrowRight, ArrowUpRight, Bot } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  // Calculate subtle 3D tilt & scroll translation
  const scrollOffset = Math.min(scrollY * 0.08, 40)
  const tiltX = mousePos.y * -4
  const tiltY = mousePos.x * 4

  return (
    <section className="hero-hardware-section" aria-labelledby="hero-title">
      <div className="hero-top-header">
        <div>
          <div className="hero-eyebrow-pill">
            <span>RECRUITMENTS OPEN</span>
          </div>
          <h1 id="hero-title" className="hero-title-main">
            ASME — 2026
          </h1>
        </div>

        <div className="hero-subtitle-box">
          <p>
            Three verticals. Real hardware. A place to start before you feel ready.
          </p>
          <div className="hero-actions-row">
            <Link className="primary-button" to="/verticals">
              Explore verticals <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" to="/how-it-works">
              How it works <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Studio Hardware Stage with Interactive Motion */}
      <div
        className="hardware-stage"
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
      >
        <div className="stage-light-ambient" aria-hidden="true" />

        <img
          src="/hero-robot.jpg"
          alt="Autonomous quadruped robot hardware platform"
          className="stage-image"
          style={{
            transform: `translateY(${scrollOffset * 0.4}px) scale(${1 + scrollOffset * 0.0015})`,
          }}
        />

        {/* Floating Spec Overlay Card with Continuous Levitation */}
        <div className="floating-spec-card">
          <div className="spec-icon-badge" aria-hidden="true">
            <Bot size={20} />
          </div>
          <h3>BRING YOUR DREAM TO LIFE</h3>
          <p>
            Build real mechanical, electronics, and software systems.
          </p>
        </div>
      </div>
    </section>
  )
}