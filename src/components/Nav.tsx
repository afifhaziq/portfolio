import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

// The full-screen mobile menu surfaces every section, including the two
// (Leadership, Certifications) the compact desktop bar deliberately omits.
const MOBILE_LINKS = [
  ...LINKS.slice(0, 5),
  { href: '#leadership', label: 'Leadership' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label={`${profile.name} — home`}>
          {profile.initials}
        </a>
        <nav className="nav-links desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
      </div>
      {open && (
        <nav className="nav-mobile-panel" aria-label="Mobile">
          {MOBILE_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Nav
