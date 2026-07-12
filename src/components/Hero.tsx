import { profile } from '../data/profile'
import GradientWrapper from './GradientWrapper'

const KEYWORDS = ['Network Security', 'Applied ML', 'Encrypted Traffic Classification', 'MLOps']

function Hero() {
  return (
    <section id="top" className="hero">
      <GradientWrapper variant="colorful" direction="down" height={720} />
      <div className="container hero-content">
        <div className="hero-avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
        <div className="hero-tags">
          {KEYWORDS.map((keyword) => (
            <span key={keyword} className="tag tag--accent">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
