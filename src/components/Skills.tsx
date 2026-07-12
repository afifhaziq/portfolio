import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading title="Skills" />
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08} className="card">
              <div className="skill-group-title">{group.category}</div>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
