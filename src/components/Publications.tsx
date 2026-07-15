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
        <ol className="citation-list">
          {publications.map((entry, index) => (
            <li key={entry.title}>
              <Reveal delay={index * 0.08} className="citation">
                <span className="citation-type">{entry.type}</span>
                <div className="citation-body">
                  <cite className="citation-title">{entry.title}</cite>
                  <span className="citation-venue">
                    {entry.venue}, {entry.period}.
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Publications
