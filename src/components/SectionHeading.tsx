interface SectionHeadingProps {
  index: string
  title: string
  /** Optional eyebrow tail, e.g. "TRACK RECORD" renders `02 // EXPERIENCE · TRACK RECORD` */
  note?: string
}

function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {index} <span className="eyebrow-slashes">{'//'}</span> {title.toUpperCase()}
        {note ? ` · ${note}` : ''}
      </p>
      <h2 className="section-title">
        {title.toLowerCase()}
        <span className="accent">.</span>
      </h2>
    </div>
  )
}

export default SectionHeading
