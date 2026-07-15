import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { publications } from '../data/publications'

const pad = (n: number) => String(n).padStart(2, '0')

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="05" title="Publications & Talks" note="OUTPUT" />
        </Reveal>
        <ol className="citation-list">
          {publications.map((entry, index) => (
            <li key={entry.title}>
              <Reveal delay={index * 0.08} className="citation">
                <span className="row-index" aria-hidden="true">
                  {pad(index + 1)}
                </span>
                <div className="citation-body">
                  <cite className="citation-title">{entry.title}</cite>
                  <span className="citation-venue">
                    {entry.venue} · {entry.period}
                  </span>
                </div>
                <span className="type-tag">{entry.type.toUpperCase()}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Publications
