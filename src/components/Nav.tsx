import { useState } from 'react'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            {profile.initials}<span>.</span>
          </a>
          <nav className="nav-links desktop" aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta desktop">
            Get in Touch
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <nav className="nav-mobile-panel" aria-label="Mobile">
            {[...LINKS, { href: '#contact', label: 'Contact' }].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Nav
