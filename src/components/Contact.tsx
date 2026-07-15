import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="08" title="Contact" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-intro">
            Open to conversations about network security, applied ML, and research collaborations. Reach out
            through any of the channels below.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="contact-links">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub — @afifhaziq
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
