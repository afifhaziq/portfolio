import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" title="Selected Projects" />
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="project-entry">
                <div className="project-entry-meta">{project.period}</div>
                <div className="project-entry-body">
                  <h3 className="project-entry-title">{project.title}</h3>
                  <p className="project-entry-desc">{project.description}</p>
                  <ul className="tag-row">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
