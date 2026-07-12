import { motion, useInView, useReducedMotion, type Transition } from 'motion/react'
import { createElement, useRef, type ElementType } from 'react'

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const SPRING = { stiffness: 140, damping: 26, mass: 1.2 }

interface TextRevealProps {
  text: string
  as?: ElementType
  className?: string
  stagger?: number
  delay?: number
  blur?: number
  yOffset?: string | number
  once?: boolean
}

function TextReveal({
  text,
  as: Comp = 'span',
  className,
  stagger = 0.03,
  delay = 0,
  blur = 8,
  yOffset = '30%',
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once, amount: 0.4 })
  const reduce = useReducedMotion()
  const words = text.split(' ')

  return createElement(
    Comp,
    { ref, className, style: { display: 'block' } },
    words.map((word, i) => {
        const d = delay + i * stagger
        const initial = reduce ? { opacity: 0 } : { y: yOffset, opacity: 0, filter: `blur(${blur}px)` }
        const animate = inView
          ? reduce
            ? { opacity: 1 }
            : { y: 0, opacity: 1, filter: 'blur(0px)' }
          : initial
        const transition: Transition = reduce
          ? { opacity: { duration: 0.25, ease: EASE_OUT, delay: d * 0.3 } }
          : {
              y: { type: 'spring', ...SPRING, delay: d },
              opacity: { duration: 0.7, ease: EASE_OUT, delay: d },
              filter: { duration: 0.9, ease: EASE_OUT, delay: d },
            }

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={initial}
            animate={animate}
            transition={transition}
            style={{ display: 'inline-block', willChange: 'transform' }}
          >
            {word}
            {i < words.length - 1 ? <span style={{ display: 'inline-block' }}>&nbsp;</span> : null}
          </motion.span>
        )
      }),
  )
}

export default TextReveal
