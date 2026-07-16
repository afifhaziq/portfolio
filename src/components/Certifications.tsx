import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { certifications } from '../data/certifications'

const pad = (n: number) => String(n).padStart(2, '0')

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="07" title="Certifications" note="VERIFIED" />
        </Reveal>
        <ul className="spec-table">
          {certifications.map((cert, index) => (
            <li key={cert.name}>
              <Reveal delay={index * 0.03} className="spec-row">
                <span className="row-index" aria-hidden="true">
                  {pad(index + 1)}
                </span>
                <span className="spec-primary">{cert.name}</span>
                <span className="spec-secondary">{cert.issuer}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
