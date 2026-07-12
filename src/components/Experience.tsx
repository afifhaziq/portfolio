import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>
        <div className="timeline">
          {experience.map((entry, index) => (
            <Reveal key={entry.role + entry.org} delay={index * 0.1} className="timeline-item">
              <div className="timeline-period">{entry.period}</div>
              <div>
                <div className="timeline-role">{entry.role}</div>
                <div className="timeline-org">{entry.org}</div>
                <div className="timeline-location">{entry.location}</div>
                <ul className="timeline-bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
