import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { leadership } from '../data/leadership'

function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="06" title="Leadership & Community" />
        </Reveal>
        <div className="leadership-grid">
          {leadership.map((entry, index) => (
            <Reveal key={entry.role} delay={index * 0.06} className="leadership-item card card--hover">
              <div className="leadership-role">{entry.role}</div>
              <div className="leadership-org">{entry.org}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
