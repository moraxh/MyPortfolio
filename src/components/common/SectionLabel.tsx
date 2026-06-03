interface SectionLabelProps {
  idx: string
  title: string
}

export default function SectionLabel({ idx, title }: SectionLabelProps) {
  return (
    <div className="section-label reveal">
      <span className="idx">{idx}</span>
      <span className="ttl">{title}</span>
      <span className="rule" />
    </div>
  )
}
