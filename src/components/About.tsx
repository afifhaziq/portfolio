import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile, education } from '../data/profile'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>
        <Reveal delay={0.1} className="about-layout">
          <p className="about-bio">{profile.summary}</p>
          <div className="education-list">
            {education.map((entry) => (
              <div key={entry.degree} className="education-item">
                <div className="education-degree">{entry.degree}</div>
                <div className="education-meta">
                  {entry.school} · {entry.period}
                  {entry.detail ? ` · ${entry.detail}` : ''}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
