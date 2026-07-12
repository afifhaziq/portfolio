import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  const classes = ['reveal', inView ? 'reveal-visible' : '', className].filter(Boolean).join(' ')
  const style = delay ? ({ transitionDelay: `${delay}s` } as CSSProperties) : undefined

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}

export default Reveal
