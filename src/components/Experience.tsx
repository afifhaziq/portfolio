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
        <Reveal delay={0.05} className="xp-table">
          {experience.map((entry) => (
            <div key={entry.role + entry.org} className="xp-row">
              <div className="xp-meta">
                <span className="xp-period">{entry.period}</span>
                <div className="xp-location">{entry.location}</div>
              </div>
              <div className="xp-body">
                <h3 className="xp-role">{entry.role}</h3>
                <div className="xp-org">{entry.org}</div>
                <ul className="xp-bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
