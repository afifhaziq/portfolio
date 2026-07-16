import { profile } from '../data/profile'

const KEYWORDS = [
  'Network Security',
  'Applied ML',
  'Encrypted Traffic Classification',
  'MLOps',
  'Intrusion Detection',
  'Explainable AI',
]

const STATS = [
  { value: '238%', label: 'Edge-inference throughput gain' },
  { value: '12.5M', label: 'Encrypted packets published' },
  { value: '30M+', label: 'Users on sentiment platform' },
  { value: '99.99%', label: 'Production uptime' },
  { value: '1,000+', label: 'Domains monitored' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="bento">
          <article className="bento-card card bento-intro">
            <div>
              <div className="hero-avatar" aria-hidden="true">
                {profile.initials}
              </div>
            </div>
            <div>
              <p className="hero-role">{profile.role}</p>
              <h1 className="hero-name">
                {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="gradient-text">{profile.name.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="hero-summary">{profile.summary}</p>
            </div>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-ghost">
                View Work
              </a>
            </div>
          </article>

          {STATS.slice(0, 4).map((stat) => (
            <div key={stat.value} className="bento-card card card--hover bento-stat">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}

          <div className="bento-card card bento-keywords">
            <div className="bento-tile-title">Focus Areas</div>
            <div className="bento-keyword-pills">
              {KEYWORDS.map((keyword) => (
                <span key={keyword} className="tag tag--accent">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="bento-card card card--hover bento-stat">
            <div className="stat-value">{STATS[4].value}</div>
            <div className="stat-label">{STATS[4].label}</div>
          </div>

          <div className="bento-card card bento-contact">
            <div className="bento-tile-title">Connect</div>
            <div className="bento-contact-links">
              <a className="bento-contact-link" href={`mailto:${profile.email}`}>
                Email <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="bento-contact-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
