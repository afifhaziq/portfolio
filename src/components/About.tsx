import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile, education } from '../data/profile'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>
        <Reveal delay={0.1} className="about-layout">
          <p className="about-bio card">{profile.summary}</p>
          <div className="education-list">
            {education.map((entry) => (
              <div key={entry.degree} className="education-item card card--hover">
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
