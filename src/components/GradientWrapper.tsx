import type { CSSProperties } from 'react'

export type GradientVariant = 'colorful' | 'blue' | 'red'
export type GradientDirection = 'down' | 'up'

interface GradientWrapperProps {
  variant?: GradientVariant
  direction?: GradientDirection
  height?: number
}

interface VariantColors {
  center: string
  /** color-mix() second argument, e.g. "navy 40%" */
  left: string
  /** color-mix() second argument, e.g. "teal 40%" */
  right: string
}

// Ported from mlflow-website's GradientWrapper.tsx (github.com/mlflow/mlflow-website)
const VARIANTS: Record<GradientVariant, VariantColors> = {
  colorful: {
    center: '#eb1700',
    left: 'oklch(0.33 0.15 328.37) 80%',
    right: 'oklch(0.66 0.17 248.82) 100%',
  },
  blue: {
    center: 'oklch(0.7533 0.11 216.4)',
    left: 'navy 40%',
    right: 'teal 40%',
  },
  red: {
    center: 'oklch(0.6 0.22 30.59)',
    left: 'black 10%',
    right: 'oklch(0.91 0.09 326.28) 40%',
  },
}

function GradientWrapper({ variant = 'colorful', direction = 'down', height = 720 }: GradientWrapperProps) {
  const { center, left, right } = VARIANTS[variant]
  const stripeGap = direction === 'down' ? '24px' : '18px'
  const radialPosition = direction === 'down' ? 'top' : 'bottom'
  const maskDirection = direction === 'down' ? 'bottom' : 'top'

  const backgroundImage = [
    `repeating-linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.25) ${stripeGap}, transparent 2px, transparent 10px)`,
    `radial-gradient(circle at ${radialPosition} center, ${center} 0%, transparent 60%)`,
    `linear-gradient(to right, color-mix(in srgb, ${center}, ${left}), color-mix(in srgb, ${center}, ${right}))`,
  ].join(', ')

  const maskImage = `linear-gradient(to ${maskDirection}, black 40%, transparent 90%)`

  const style: CSSProperties = {
    height,
    backgroundImage,
    maskImage,
    WebkitMaskImage: maskImage,
  }

  return <div className={`gradient-wrapper gradient-wrapper--${direction}`} style={style} aria-hidden="true" />
}

export default GradientWrapper
