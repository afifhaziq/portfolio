import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects } from '../data/projects'

const pad3 = (n: number) => String(n).padStart(3, '0')

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" title="Projects" note="THE WORK" />
        </Reveal>
        <div className="cell-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="cell">
              <article className="cell-inner">
                <div className="cell-head">
                  <span className="row-index">{pad3(index + 1)}</span>
                  <span className="cell-meta">{project.period}</span>
                </div>
                <h3 className="cell-title">{project.title}</h3>
                <p className="cell-desc">{project.description}</p>
                <ul className="chip-row">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
