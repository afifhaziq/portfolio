import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { leadership } from '../data/leadership'

const pad = (n: number) => String(n).padStart(2, '0')

function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="06" title="Leadership & Community" note="OFF-DUTY" />
        </Reveal>
        <ul className="spec-table">
          {leadership.map((entry, index) => (
            <li key={entry.role}>
              <Reveal delay={index * 0.04} className="spec-row">
                <span className="row-index" aria-hidden="true">
                  {pad(index + 1)}
                </span>
                <span className="spec-primary">{entry.role}</span>
                <span className="spec-secondary">{entry.org}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Leadership
