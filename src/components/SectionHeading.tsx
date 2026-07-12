interface SectionHeadingProps {
  index: string
  title: string
}

function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{index}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

export default SectionHeading
