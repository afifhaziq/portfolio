import { useState } from 'react'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          {profile.initials}<span>.</span>
        </a>
        <nav className="nav-links desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            Resume
          </a>
        </nav>
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
        <div className="container nav-mobile-panel">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      )}
    </header>
  )
}

export default Nav
