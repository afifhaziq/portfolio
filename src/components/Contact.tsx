import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CopyCommand from './CopyCommand'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="08" title="Contact" note="OPEN CHANNEL" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="ready-panel">
            <p className="ready-status">
              <span className="ready-dot" aria-hidden="true">●</span> READY
            </p>
            <p className="ready-text">
              Open to conversations about network security, applied ML, and research collaborations.
            </p>
            <CopyCommand copyText={profile.email} display={`mail ${profile.email}`} />
            <a className="cmd-link" href={profile.github} target="_blank" rel="noreferrer">
              <span aria-hidden="true">$ </span>open github.com/afifhaziq <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
