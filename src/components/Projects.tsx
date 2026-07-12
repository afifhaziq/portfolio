import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import BorderGlow from './BorderGlow'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading title="Projects" />
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="project-card-wrap">
              <BorderGlow
                className="project-card"
                borderRadius={16}
                backgroundColor="var(--color-bg-raised)"
                glowColor="21 86 63"
                colors={['#f2894f', '#f9b98c', '#c4622e']}
              >
                <div className="project-card-period">{project.period}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
