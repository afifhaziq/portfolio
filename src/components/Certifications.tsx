import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="07" title="Certifications" />
        </Reveal>
        <ul className="entry-list">
          {certifications.map((cert, index) => (
            <li key={cert.name}>
              <Reveal delay={index * 0.04} className="entry-row">
                <span className="entry-primary">{cert.name}</span>
                <span className="entry-secondary">{cert.issuer}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
