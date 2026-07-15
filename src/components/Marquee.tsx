const KEYWORDS = [
  'Network Security',
  'Applied ML',
  'Encrypted Traffic',
  'MLOps',
  'Intrusion Detection',
  'Edge Inference',
  'Explainable AI',
]

function MarqueeTrack() {
  return (
    <div className="marquee-track" aria-hidden="true">
      {KEYWORDS.map((word) => (
        <span key={word} className="marquee-item">
          {word}
          <span className="sep">✦</span>
        </span>
      ))}
    </div>
  )
}

function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <MarqueeTrack />
      <MarqueeTrack />
    </div>
  )
}

export default Marquee
