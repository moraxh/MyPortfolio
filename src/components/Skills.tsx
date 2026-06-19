import { useRef, useCallback } from "react"
import SectionLabel from "@components/common/SectionLabel"
import { SKILLS } from "@/data"

function SkillCard({ cat }: { cat: typeof SKILLS[number] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateZ(4px)`
  }, [])

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ""
    card.style.transition = "transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
    setTimeout(() => { if (card) card.style.transition = "" }, 500)
  }, [])

  return (
    <div
      ref={cardRef}
      className="skill-cat"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      <div className="head">
        <span className="n">{cat.n}</span>
        <h3>{cat.title}</h3>
      </div>
      <p className="desc">{cat.desc}</p>
      <div className="skill-list">
        {cat.items.map((skill, j) => (
          <span key={j}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <SectionLabel idx="03" title="Skills" />
        <div className="skills-grid reveal">
          {SKILLS.map((cat, i) => (
            <SkillCard key={i} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
