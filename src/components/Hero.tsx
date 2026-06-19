import { useEffect, useState, useCallback, useRef } from "react"
import Icon from "@components/common/Icon"
import { HERO, STATUS_PANEL, META } from "@/data"

export default function Hero() {
  const [clock, setClock] = useState("—")
  const [clockHovered, setClockHovered] = useState(false)
  const clockRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const local = new Date(utc - 6 * 3600000)
      const hh = String(local.getHours()).padStart(2, "0")
      const mm = String(local.getMinutes()).padStart(2, "0")
      const ss = String(local.getSeconds()).padStart(2, "0")
      setClock(clockHovered ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`)
    }
    tick()
    const id = setInterval(tick, clockHovered ? 1000 : 15000)
    return () => clearInterval(id)
  }, [clockHovered])

  const go = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" })
  }, [])

  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="reveal in">
          <div className="hero-eyebrow">
            <span className="ping" />
            <span className="mono">{HERO.status}</span>
          </div>
          <h1>{HERO.h1}</h1>
          <p className="lede">{HERO.lede}</p>
          <p className="sub">
            {HERO.sub[0]}
            <span className="impact">{HERO.sub[1]}</span>
            {HERO.sub[2]}
          </p>
          <div className="hero-cta">
            <button className="pf-btn primary" onClick={() => go("projects")}>
              {HERO.cta.projects}
              <Icon name="arrowR" className="ic" size={15} />
            </button>
            <a className="pf-btn" href={META.cvUrl} download>
              <Icon name="download" className="ic" size={15} />
              {HERO.cta.cv}
            </a>
            <button className="pf-btn" onClick={() => go("contact")}>
              {HERO.cta.contact}
            </button>
          </div>
        </div>

        <aside className="panel reveal in" style={{ transitionDelay: "0.08s" }}>
          <div className="panel-head">
            <div className="lights">
              <i /><i /><i />
            </div>
            <span className="title">{STATUS_PANEL.title}</span>
          </div>
          <div className="panel-body">
            {STATUS_PANEL.rows.map((row, i) => (
              <div
                className="stat-row"
                key={i}
                {...(row.value === "clock" ? {
                  onMouseEnter: () => setClockHovered(true),
                  onMouseLeave: () => setClockHovered(false),
                  style: { cursor: "default" },
                  title: "Hover to see seconds",
                } : {})}
              >
                <span className="k">{row.label}</span>
                <span className="v">
                  {row.highlight && <span className="avail-dot" />}
                  <span
                    ref={row.value === "clock" ? clockRef : undefined}
                    className={[
                      row.highlight ? "live" : "",
                      row.value === "clock" ? "clock-val" : "",
                    ].filter(Boolean).join(" ")}
                    style={row.value === "clock" ? {
                      fontVariantNumeric: "tabular-nums",
                      transition: "opacity 0.15s",
                    } : undefined}
                  >
                    {row.value === "clock" ? clock : row.value}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="cap-meter">
            <div className="mono" style={{ marginBottom: "12px", fontSize: "10.5px" }}>
              {STATUS_PANEL.capLabel}
            </div>
            {STATUS_PANEL.caps.map((cap, i) => (
              <div className="cap-row" key={i}>
                <span className="lbl">{cap.label}</span>
                <span className="cap-track">
                  <span className="cap-fill" style={{ width: cap.pct + "%" }} />
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </header>
  )
}
