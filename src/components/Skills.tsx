import SectionLabel from "@components/common/SectionLabel"
import { SKILLS } from "@/data"

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <SectionLabel idx="03" title="Skills" />
        <div className="skills-grid reveal">
          {SKILLS.map((cat, i) => (
            <div className="skill-cat" key={i}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
