import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="04" title="Skills" />
        </Reveal>
        <Reveal delay={0.05} className="skills-table">
          {skills.map((group) => (
            <div key={group.category} className="skill-row">
              <div className="skill-cat">{group.category}</div>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
