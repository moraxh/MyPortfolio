import { useEffect, useState, useCallback } from "react"
import Icon from "@components/common/Icon"
import { META, NAV_LINKS } from "@/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [active, setActive] = useState("top")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = ["top", ...NAV_LINKS.map((l) => l.id)]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id) })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const go = useCallback((id: string) => {
    setDrawer(false)
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return }
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" })
  }, [])

  return (
    <>
      <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <button
            className="brand"
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0 }}
            onClick={() => go("top")}
          >
            <picture>
              <source srcSet="/logo_light.png" media="(prefers-color-scheme: light)" />
              <img src="/logo.png" alt="MoraXH logo" width={26} height={26} style={{ display: "block" }} />
            </picture>
            <span>Jorge Mora</span>
            <span className="dot" />
          </button>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`nav-link${active === link.id ? " active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="nav-right">
            <a className="pf-btn sm" href={META.cvUrl} download>
              <Icon name="download" className="ic" size={15} />
              CV
            </a>
            <button className="iconbtn menu-btn" onClick={() => setDrawer(true)} aria-label="Open menu">
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer${drawer ? " open" : ""}`}>
        <div className="d-head">
          <span className="brand">
            <picture>
              <source srcSet="/logo_light.png" media="(prefers-color-scheme: light)" />
              <img src="/logo.png" alt="MoraXH logo" width={26} height={26} style={{ display: "block" }} />
            </picture>
            <span>Jorge Mora</span>
          </span>
          <button className="iconbtn" onClick={() => setDrawer(false)} aria-label="Close menu">
            <Icon name="close" size={18} />
          </button>
        </div>
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.id}
            className="drawer-link"
            onClick={() => go(link.id)}
          >
            <span className="dn">{String(i + 1).padStart(2, "0")}</span>
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
