import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { publications } from '../data/publications'

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="05" title="Publications & Talks" />
        </Reveal>
        <div className="publications-list">
          {publications.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.08} className="card publication-item">
              <div>
                <div className="publication-title">{entry.title}</div>
                <div className="publication-venue">
                  {entry.venue} · {entry.period}
                </div>
              </div>
              <span className="tag tag--accent">{entry.type}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
