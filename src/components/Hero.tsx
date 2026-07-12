import { profile } from '../data/profile'
import Dither from './Dither'
import TextReveal from './TextReveal'

const KEYWORDS = ['Network Security', 'Applied ML', 'Encrypted Traffic Classification', 'MLOps']

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-dither-bg" aria-hidden="true">
        <Dither
          waveColor={[0.231, 0.435, 0.929]}
          waveSpeed={0.15}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={6}
          pixelSize={2}
          enableMouseInteraction
          mouseRadius={0.3}
        />
      </div>
      <div className="container hero-content">
        <div className="hero-avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <TextReveal text={profile.summary} as="p" className="hero-summary" delay={0.3} stagger={0.02} />
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
