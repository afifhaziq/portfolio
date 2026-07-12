import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-layout">
        <Reveal>
          <SectionHeading title="Contact" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="about-bio">
            Open to conversations about network security, applied ML, and research collaborations. Reach out
            through any of the channels below.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="contact-pills">
          <a className="contact-pill" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="contact-pill" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
