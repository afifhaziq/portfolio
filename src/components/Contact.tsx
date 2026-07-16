import Reveal from './Reveal'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card card">
            <div className="contact-heading">
              <div className="eyebrow">08 — Contact</div>
              <h2 className="section-title">
                Let&apos;s build something <span className="gradient-text">secure</span>.
              </h2>
              <p className="contact-bio">
                Open to conversations about network security, applied ML, and research collaborations.
                Reach out through any of the channels below.
              </p>
            </div>
            <div className="contact-pills">
              <a className="contact-pill" href={`mailto:${profile.email}`}>
                {profile.email} <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="contact-pill" href={profile.github} target="_blank" rel="noreferrer">
                GitHub · @afifhaziq <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
