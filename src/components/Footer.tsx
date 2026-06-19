import { useState, useEffect } from "react"

const GREETINGS = [
  { range: [5, 12],  text: "Good morning." },
  { range: [12, 14], text: "Good afternoon." },
  { range: [14, 19], text: "Good evening." },
  { range: [19, 24], text: "Working late?" },
  { range: [0, 5],   text: "Burning midnight oil?" },
]

function getGreeting() {
  const h = new Date().getHours()
  return GREETINGS.find(g => h >= g.range[0] && h < g.range[1])?.text ?? "Hello."
}

export default function Footer() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="mono">© 2026 · Jorge Mora</span>
        {greeting && (
          <span className="mono footer-greeting" aria-label={greeting}>
            {greeting}
          </span>
        )}
      </div>
    </footer>
  )
}
