import { profile } from '../data/profile'

const SECTIONS = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#publications', label: 'publications' },
  { href: '#leadership', label: 'leadership' },
  { href: '#certifications', label: 'certifications' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="footer-wordmark">
              afif<span className="accent">.</span>
            </a>
            <p className="footer-role">{profile.role.toUpperCase()}</p>
          </div>
          <nav className="footer-col" aria-label="Sections">
            <h3 className="footer-col-title">/ SECTIONS</h3>
            {SECTIONS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-col">
            <h3 className="footer-col-title">/ CONTACT</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/afifhaziq
            </a>
          </div>
        </div>
        <div className="footer-telemetry">
          <span>
            SYS.STATUS <span className="eyebrow-slashes">{'//'}</span> OK · MODE: RESEARCH · UPTIME: 99.99%
          </span>
          <span>© {year} {profile.name}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
