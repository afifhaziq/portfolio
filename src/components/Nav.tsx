import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'ABOUT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#publications', label: 'PUBLICATIONS' },
  { href: '#contact', label: 'CONTACT' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          afif<span className="accent">.</span>
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
          {open ? '[CLOSE]' : '[MENU]'}
        </button>
      </div>
      {open && (
        <div className="container nav-mobile-panel">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Nav
