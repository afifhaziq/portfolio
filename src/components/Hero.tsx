import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import CopyCommand from './CopyCommand'

const SPEC_CHIPS = ['MODE: RESEARCH', 'LATENCY: LOW', 'LOCATION: MY']

interface TermLine {
  cmd: boolean
  text: string
}

const TERM_LINES: TermLine[] = [
  { cmd: true, text: 'whoami' },
  { cmd: false, text: 'Afif Haziq — Network Security Researcher & Engineer' },
  { cmd: true, text: 'cat focus.txt' },
  { cmd: false, text: 'network-security · applied-ml · encrypted-traffic · mlops' },
]

const PROMPT = 'afif@sec:~$'
const TYPE_MS = 30

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Chrome-less shell that typewrites on load. Purely decorative — the same
 *  information is rendered as real text in the hero copy, so the whole block
 *  is aria-hidden. */
function Terminal() {
  const [reduced] = useState(prefersReducedMotion)
  const [line, setLine] = useState(reduced ? TERM_LINES.length : 0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    if (line >= TERM_LINES.length) return
    const current = TERM_LINES[line]
    const advance = () => {
      setLine(line + 1)
      setChar(0)
    }
    const timer = current.cmd && char < current.text.length
      ? window.setTimeout(() => setChar(char + 1), TYPE_MS)
      : window.setTimeout(advance, current.cmd ? 350 : 250)
    return () => window.clearTimeout(timer)
  }, [line, char])

  const done = line >= TERM_LINES.length

  return (
    <div className="terminal" aria-hidden="true">
      {TERM_LINES.map((entry, i) => {
        if (i > line) return null
        const isCurrent = i === line
        const text = isCurrent && entry.cmd ? entry.text.slice(0, char) : entry.text
        return (
          <div key={entry.text} className={entry.cmd ? 'terminal-line' : 'terminal-line terminal-out'}>
            {entry.cmd && <span className="terminal-prompt">{PROMPT} </span>}
            {text}
            {isCurrent && entry.cmd && <span className="terminal-cursor">█</span>}
          </div>
        )
      })}
      {done && (
        <div className="terminal-line">
          <span className="terminal-prompt">{PROMPT} </span>
          <span className="terminal-cursor">█</span>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{profile.role.toUpperCase()}</p>
          <h1 className="hero-name">
            afif haziq<span className="accent">.</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <ul className="hero-chips" aria-label="Specifications">
            {SPEC_CHIPS.map((chip) => (
              <li key={chip} className="spec-chip">
                {chip}
              </li>
            ))}
          </ul>
          <CopyCommand copyText={profile.email} display={`mail ${profile.email}`} />
        </div>
        <Terminal />
      </div>
    </section>
  )
}

export default Hero
