import SectionLabel from "@components/common/SectionLabel"
import { EXPERIENCE } from "@/data"

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <SectionLabel idx="02" title="Experience" />
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div
              className="tl-item reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="tl-when">
                {exp.now
                  ? <span className="now">{exp.when}</span>
                  : exp.when
                }
              </div>
              <div>
                <div className="tl-role">{exp.role}</div>
                <div className="tl-org">{exp.org}</div>
                <ul className="tl-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="tl-tags">
                  {exp.tags.map((tag, j) => (
                    <span className="tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
