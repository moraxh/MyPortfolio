import SectionLabel from "@components/common/SectionLabel"
import { ABOUT } from "@/data"

export default function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <SectionLabel idx="01" title="About" />
        <div className="about-grid">
          <div className="about-body reveal">
            {ABOUT.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stats-card reveal" style={{ transitionDelay: "0.1s" }}>
            {ABOUT.stats.map((s, i) => (
              <div className="stat-cell" key={i}>
                <div className="num">
                  {s.num}
                  <span className="u">{s.suffix}</span>
                </div>
                <div className="cap">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
