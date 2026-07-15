import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface Stat {
  value: number
  decimals?: number
  group?: boolean
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { value: 238, suffix: '%', label: 'edge inference throughput gain' },
  { value: 12.5, decimals: 1, suffix: 'M', label: 'encrypted packets published' },
  { value: 99.99, decimals: 2, suffix: '%', label: 'production uptime' },
  { value: 30, suffix: 'M+', label: 'users, validated LLM platform' },
  { value: 1000, group: true, suffix: '+', label: 'blocked domains monitored' },
]

const DURATION_MS = 1200

function formatValue(value: number, stat: Stat) {
  if (stat.group) return Math.round(value).toLocaleString('en-US')
  return value.toFixed(stat.decimals ?? 0)
}

function StatCell({ stat, active }: { stat: Stat; active: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(stat.value)
      return
    }
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1)
      const eased = 1 - (1 - t) ** 3
      setCurrent(stat.value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, stat.value])

  return (
    <div className="stat-cell">
      <div className="stat-value">
        <span aria-hidden="true">
          {formatValue(current, stat)}
          <span className="stat-suffix">{stat.suffix}</span>
        </span>
        <span className="sr-only">
          {formatValue(stat.value, stat)}
          {stat.suffix}
        </span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section className="stats" aria-label="Measured results">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-slashes">{'//'}</span> TELEMETRY · MEASURED RESULTS
        </p>
        <div ref={ref} className="stats-grid">
          {STATS.map((stat) => (
            <StatCell key={stat.label} stat={stat} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
