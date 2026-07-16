import { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data/experience'

const pad = (n: number) => String(n).padStart(2, '0')

/** Schematic short name for the layer label: text inside parens if present
 *  (e.g. "MCMC", "CSNET"), otherwise the first word uppercased. */
function shortOrg(org: string) {
  const abbr = org.match(/\(([^)]+)\)/)?.[1]
  return (abbr ?? org.split(' ')[0]).toUpperCase()
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="02" title="Experience" note="TRACK RECORD" />
        </Reveal>
        <div className="layer-stack">
          {experience.map((entry, index) => (
            <Fragment key={entry.role + entry.org}>
              {index > 0 && (
                <div className="layer-divider" aria-hidden="true">
                  ↓ PRIOR ROLE
                </div>
              )}
              <Reveal className="layer">
                <div className="layer-head">
                  <span className="layer-label">
                    LAYER {pad(index + 1)} <span className="eyebrow-slashes">{'//'}</span> {shortOrg(entry.org)}
                  </span>
                  <span className="layer-period">{entry.period}</span>
                </div>
                <div className="layer-body">
                  <h3 className="layer-role">{entry.role}</h3>
                  <p className="layer-org">
                    {entry.org} · {entry.location}
                  </p>
                  <ol className="layer-bullets">
                    {entry.bullets.map((bullet, bulletIndex) => (
                      <li key={bullet}>
                        <span className="row-index" aria-hidden="true">
                          {pad(bulletIndex + 1)}
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
