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
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 0.05} className="card">
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
