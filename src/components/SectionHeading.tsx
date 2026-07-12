interface SectionHeadingProps {
  title: string
}

function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="section-title">
        <span className="section-mark" aria-hidden="true" />
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
