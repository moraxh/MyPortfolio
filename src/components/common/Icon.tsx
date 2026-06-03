type IconName =
  | "arrowUR" | "arrowR" | "plus" | "mail" | "github"
  | "linkedin" | "doc" | "download" | "external" | "menu" | "close"

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const p = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export default function Icon({ name, className, size = 24 }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    arrowUR: <path d="M7 17 17 7M9 7h8v8" {...p} />,
    arrowR:  <path d="M5 12h14M13 6l6 6-6 6" {...p} />,
    plus:    <path d="M12 5v14M5 12h14" {...p} />,
    mail:    <g {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></g>,
    github:  <path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.4-1.3 5.4-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.4 3.3 5.4 3.6 5.4 3.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10c0 4.6 2.8 5.6 5.4 5.9a2.8 2.8 0 0 0-.8 2.1V21" {...p} />,
    linkedin:<g {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" /></g>,
    doc:     <g {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></g>,
    download:<path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" {...p} />,
    external:<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" {...p} />,
    menu:    <path d="M4 7h16M4 12h16M4 17h16" {...p} />,
    close:   <path d="M6 6 18 18M18 6 6 18" {...p} />,
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
