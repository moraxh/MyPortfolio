import SectionLabel from "@components/common/SectionLabel"
import Icon from "@components/common/Icon"
import { CONTACT } from "@/data"

export default function Contact() {
  return (
    <section className="block" id="contact">
      <div className="wrap">
        <SectionLabel idx="05" title="Contact" />
        <div className="contact-grid">
          <div className="reveal">
            <h2 className="contact-h">
              {CONTACT.heading[0]}
              <br />
              <span className="accent">{CONTACT.heading[1]}</span>
            </h2>
            <p className="contact-lede">{CONTACT.lede}</p>
          </div>
          <div className="contact-links reveal" style={{ transitionDelay: "0.08s" }}>
            {CONTACT.links.map((link, i) => (
              <a
                key={i}
                className="c-link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <span className="left">
                  <Icon name={link.icon} size={17} />
                  <span className="lbl">{link.label}</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span className="val">{link.value}</span>
                  <span className="arrow">
                    <Icon name="arrowUR" size={15} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
