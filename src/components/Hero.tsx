import { profile } from '../data/profile'

const KEYWORDS = ['Network Security', 'Applied ML', 'Encrypted Traffic Classification', 'MLOps']

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-content">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-ctas">
          <a href="#contact" className="link-cta">
            Get in touch
          </a>
          <a href={profile.github} className="link-cta" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <ul className="hero-tags" aria-label="Focus areas">
          {KEYWORDS.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
