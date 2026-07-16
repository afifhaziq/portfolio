import { profile } from '../data/profile'
import Marquee from './Marquee'

function Hero() {
  const words = profile.name.split(' ')

  return (
    <section id="top" className="hero">
      <div className="container hero-content">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">
          {words.map((word, i) => (
            <span key={word + i} className={i === 1 ? 'accent-word' : undefined}>
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Work
          </a>
        </div>
      </div>
      <Marquee />
    </section>
  )
}

export default Hero
