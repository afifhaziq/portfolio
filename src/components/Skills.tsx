import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/skills'

const pad = (n: number) => String(n).padStart(2, '0')

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="04" title="Skills" note="TOOLCHAIN" />
        </Reveal>
        <div className="skills-stack">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05} className="skill-group">
              <h3 className="block-label">
                {pad(index + 1)} <span className="eyebrow-slashes">{'//'}</span> {group.category.toUpperCase()}
              </h3>
              <ul className="chip-row">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
