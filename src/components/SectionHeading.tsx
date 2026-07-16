interface SectionHeadingProps {
  index: string
  title: string
}

function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

export default SectionHeading
