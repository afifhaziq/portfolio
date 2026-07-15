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
        <ul className="entry-list">
          {leadership.map((entry, index) => (
            <li key={entry.role}>
              <Reveal delay={index * 0.05} className="entry-row">
                <span className="entry-primary">{entry.role}</span>
                <span className="entry-secondary">{entry.org}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Leadership
