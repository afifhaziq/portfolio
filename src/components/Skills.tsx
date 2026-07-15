import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="04" title="Skills & Tools" />
        </Reveal>
        <dl className="skills-list">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06} className="skill-row">
              <dt className="skill-category">{group.category}</dt>
              <dd className="skill-items">
                <ul className="tag-row">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Skills
