import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile, education } from '../data/profile'

const pad = (n: number) => String(n).padStart(2, '0')

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="01" title="About" note="OPERATOR PROFILE" />
        </Reveal>
        <Reveal delay={0.1} className="about-layout">
          <p className="about-bio">{profile.summary}</p>
          <div>
            <h3 className="block-label">
              <span className="eyebrow-slashes">{'//'}</span> EDUCATION
            </h3>
            <ul className="spec-table">
              {education.map((entry, index) => (
                <li key={entry.degree} className="spec-row spec-row--stacked">
                  <span className="row-index" aria-hidden="true">
                    {pad(index + 1)}
                  </span>
                  <span className="spec-primary">{entry.degree}</span>
                  <span className="spec-secondary">
                    {entry.school} · {entry.period}
                    {entry.detail ? ` · ${entry.detail}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
