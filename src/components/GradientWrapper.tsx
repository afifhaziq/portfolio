import type { CSSProperties } from 'react'

export type GradientDirection = 'down' | 'up'

interface GradientWrapperProps {
  direction?: GradientDirection
  height?: number
}

// A faint directional wash behind the footer, built from the site's single blue accent
// mixed toward black — no second hue, so it reads as a shadow with a hint of the accent,
// not a competing gradient.
function GradientWrapper({ direction = 'down', height = 720 }: GradientWrapperProps) {
  const accent = 'var(--color-accent-blue)'
  const stripeGap = direction === 'down' ? '24px' : '18px'
  const radialPosition = direction === 'down' ? 'top' : 'bottom'
  const maskDirection = direction === 'down' ? 'bottom' : 'top'

  const backgroundImage = [
    `repeating-linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.25) ${stripeGap}, transparent 2px, transparent 10px)`,
    `radial-gradient(circle at ${radialPosition} center, ${accent} 0%, transparent 60%)`,
    `linear-gradient(to right, color-mix(in srgb, ${accent}, black 70%), color-mix(in srgb, ${accent}, black 85%))`,
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
