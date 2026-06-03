import { useState } from "react"
import SectionLabel from "@components/common/SectionLabel"
import Icon from "@components/common/Icon"
import { PROJECTS, PROJECT_CATS, type ProjectCat } from "@/data"

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCat>("All")
  const [open, setOpen] = useState<number | null>(null)

  const shown = PROJECTS.filter((p) => filter === "All" || p.cat === filter)

  return (
    <section className="block" id="projects">
      <div className="wrap">
        <SectionLabel idx="04" title="Projects" />

        <div className="proj-filters reveal">
          {PROJECT_CATS.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " on" : ""}`}
              onClick={() => { setFilter(cat); setOpen(null) }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="proj-list reveal">
          {shown.map((proj, idx) => {
            const globalIdx = PROJECTS.indexOf(proj)
            const isOpen = open === globalIdx
            return (
              <article className={`proj${isOpen ? " open" : ""}`} key={globalIdx}>
                <button
                  className="proj-head"
                  onClick={() => setOpen(isOpen ? null : globalIdx)}
                  aria-expanded={isOpen}
                >
                  <span className="proj-num">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="proj-title-wrap">
                    <span className="proj-title">{proj.title}</span>
                    <span className="proj-tag-line">
                      <span className="cat">{proj.cat}</span>
                      <span>·</span>
                      <span>{proj.kicker}</span>
                    </span>
                  </span>
                  <span className="proj-toggle">
                    <Icon name="plus" size={16} />
                  </span>
                </button>

                <div className="proj-detail">
                  <div className="proj-detail-inner">
                    <div className="proj-body">
                      <div>
                        <div className="cs-block">
                          <div className="cs-k">Problem</div>
                          <p>{proj.problem}</p>
                        </div>
                        <div className="cs-block">
                          <div className="cs-k">Solution</div>
                          <p>{proj.solution}</p>
                        </div>
                        <div className="cs-block">
                          <div className="cs-k">Result</div>
                          <p>{proj.result}</p>
                        </div>
                      </div>

                      <div className="proj-side">
                        <div className="proj-thumb">
                          <img src={proj.image} alt={proj.title} loading="lazy" />
                        </div>
                        <div className="meta-grid">
                          <div className="meta-cell">
                            <span className="mk">Role</span>
                            <span className="mv">{proj.role}</span>
                          </div>
                          {Object.entries(proj.meta).map(([k, v]) => (
                            <div className="meta-cell" key={k}>
                              <span className="mk">{k}</span>
                              <span className="mv">{v}</span>
                            </div>
                          ))}
                        </div>
                        <div className="proj-stack">
                          {proj.stack.map((s, j) => (
                            <span className="tag" key={j}>{s}</span>
                          ))}
                        </div>
                        {proj.links.length > 0 && (
                          <div className="proj-links">
                            {proj.links.map((link, j) => (
                              <a
                                key={j}
                                className="icon-link"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Icon name={link.type === "github" ? "github" : "external"} size={14} />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
