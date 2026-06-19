export const META = {
  name: "Jorge Mora",
  handle: "MoraXH",
  email: "contact@moraxh.dev",
  location: "México",
  github: "github.com/MoraXH",
  githubUrl: "https://github.com/moraxh",
  linkedin: "linkedin.com/in/jorge-emiliano-mora-herrera",
  linkedinUrl: "https://www.linkedin.com/in/jorge-emiliano-mora-herrera-919571256",
  cvUrl: "/cv/Jorge_Mora_CV.pdf",
}

export const NAV_LINKS = [
  { label: "About",      id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills",     id: "skills" },
  { label: "Projects",   id: "projects" },
  { label: "Contact",    id: "contact" },
]

export const HERO = {
  status: "Available for roles & freelance",
  h1: "Jorge Mora",
  lede: "I build software end to end — from the data model to the deployed thing.",
  sub: [
    "Mostly self-taught. Spent the last few years shipping ",
    "AI pipelines, web platforms, and internal tools",
    " for teams that actually use them.",
  ],
  cta: { projects: "View Projects", cv: "Download CV", contact: "Contact" },
}

export const STATUS_PANEL = {
  title: "status",
  rows: [
    { label: "Availability", value: "Open",              highlight: true },
    { label: "Focus",        value: "AI · Web · Tooling", highlight: false },
    { label: "Based in",     value: "México · GMT−6",    highlight: false },
    { label: "Local time",   value: "clock",             highlight: false },
  ],
  capLabel: "capability snapshot",
  caps: [
    { label: "Web / Frontend",  pct: 92 },
    { label: "Backend / APIs",  pct: 88 },
    { label: "AI / Vision",     pct: 84 },
    { label: "Infra / DevOps",  pct: 76 },
  ],
}

export const ABOUT = {
  body: [
    "Mostly self-taught — I learned by building things and breaking them. Started with small automations, ended up designing the architecture for production systems.",
    "Over the last few years I've led the implementation of a talent-management SaaS, an on-device computer-vision pipeline that runs without internet, and internal platforms that replaced years of spreadsheet chaos at a radio news outlet.",
    "I use ML when it's the right tool, and plain code when it isn't. The question I ask before either is: what does this actually need to do?",
  ],
  stats: [
    { num: "4", suffix: "+", label: "years building software" },
    { num: "12", suffix: "+", label: "projects shipped" },
    { num: "4", suffix: "",  label: "production systems led" },
    { num: "3", suffix: "",  label: "domains: AI · web · ops" },
  ],
}

export const EXPERIENCE = [
  {
    when: "2025 - Present",
    now: true,
    role: "Lead Software Engineer",
    org: "al1A",
    bullets: [
      "Designed the data model and architecture for a talent-management SaaS from scratch — candidate pipelines, role tracking, RBAC.",
      "Set up cloud infrastructure, CI/CD, and microservices. The system was in production before the team grew.",
      "Integrated ML and LLM features into the core product, including a resume screening module.",
    ],
    tags: ["Microservices", "React", "Node.js", "Python", "Docker", "Cloud", "CI/CD"],
  },
  {
    when: "2022 - 2025",
    now: false,
    role: "Software Developer",
    org: "El Salmantino",
    bullets: [
      "Built the internal platform for a radio news outlet — journalist scheduling, payroll, commissions, expense tracking, all in one system.",
      "Replaced a decade of manual spreadsheets. Editorial and business teams stopped using Excel for operations.",
      "Automated Facebook publishing through the WordPress and Facebook APIs, reducing the daily publishing workflow from manual to one click.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "APIs", "Web Architecture", "Node.js"],
  },
]

export const SKILLS = [
  {
    n: "01",
    title: "Frontend",
    desc: "From component systems to pixel-level details. React is home, but I've shipped in Astro, Next.js, and Electron too.",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "Astro", "Electron"],
  },
  {
    n: "02",
    title: "Backend",
    desc: "REST APIs, data models, auth flows. I care about what happens when the happy path breaks.",
    items: ["Node.js", "Python", "PHP", "FastAPI", "Laravel", "REST", "GraphQL"],
  },
  {
    n: "03",
    title: "AI / Computer Vision",
    desc: "Trained models, ported them to ONNX, ran them on-device in the browser. I know the whole pipeline.",
    items: ["PyTorch", "TensorFlow", "OpenCV", "ONNX", "WebAssembly", "NLP", "OCR"],
  },
  {
    n: "04",
    title: "Infrastructure",
    desc: "Docker, cloud, CI/CD. I set up the pipelines so the rest of the team doesn't have to think about them.",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Nginx", "Linux", "Vercel"],
  },
  {
    n: "05",
    title: "Databases",
    desc: "Schema design matters more than query tuning, until it doesn't. I've worked with both problems.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Vector DBs"],
  },
  {
    n: "06",
    title: "Tools",
    desc: "Nothing exotic. The tools that stay out of the way.",
    items: ["Git", "Figma", "Postman", "Bash", "Notion", "Firebase"],
  },
]

export type ProjectCat = "All" | "AI / Vision" | "Web Platform" | "Internal Tools"

export interface Project {
  cat: Exclude<ProjectCat, "All">
  title: string
  kicker: string
  problem: string
  solution: string
  role: string
  result: string
  stack: string[]
  meta: Record<string, string>
  image: string
  links: { label: string; type: "demo" | "github"; url: string }[]
}

export const PROJECT_CATS: ProjectCat[] = ["All", "AI / Vision", "Web Platform", "Internal Tools"]

export const PROJECTS: Project[] = [
  {
    cat: "Web Platform",
    title: "al1A",
    kicker: "Talent-management SaaS",
    problem: "HR teams were tracking candidates, roles, and pipelines in disconnected spreadsheets — no audit trail, no shared state, frequent mistakes.",
    solution: "Designed the data model and built the platform from scratch: candidate pipelines, role tracking, role-based access. One system that replaced the spreadsheet sprawl.",
    role: "Lead architect & full-stack engineer",
    result: "Hiring operations centralized before the team grew. The data model handled every edge case that came up in production without structural changes.",
    stack: ["React", "Node.js", "PostgreSQL", "TypeScript", "Microservices", "Docker"],
    meta: { Type: "SaaS product", Status: "In production" },
    image: "/projects/al1a.png",
    links: [],
  },
  {
    cat: "AI / Vision",
    title: "FrameFind",
    kicker: "Real-time glasses detection",
    problem: "An optical retailer needed glasses detection from a live camera feed — with no cloud dependency and no latency from a server round-trip.",
    solution: "On-device CV pipeline: MediaPipe for face landmarks, a custom ONNX model at ~6.2 MB, WASM + WebGPU acceleration. Runs entirely in the browser.",
    role: "Computer-vision / ML engineer",
    result: "Real-time inference in the browser. No video leaves the device. Works on a phone without an internet connection.",
    stack: ["Python", "OpenCV", "ONNX", "PyTorch", "WebAssembly", "WebGPU", "React", "TypeScript"],
    meta: { Type: "CV pipeline", Status: "Prototype → pilot" },
    image: "/projects/framefind.png",
    links: [{ label: "Demo", type: "demo", url: "https://framefind.moraxh.dev" }],
  },
  {
    cat: "Web Platform",
    title: "Mis Líneas",
    kicker: "Mobile carrier checker",
    problem: "In Mexico, anyone can register a phone line under your CURP without your knowledge. There was no tool to check which lines were registered to you.",
    solution: "A web app that queries all major carriers and MVNOs in México with a single CURP lookup. Results in real time, no account needed.",
    role: "Full-stack engineer & designer",
    result: "A tool people actually share when they're worried about identity misuse. Still getting traffic.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    meta: { Type: "Web app", Status: "Live" },
    image: "/projects/mislineas.png",
    links: [{ label: "Live", type: "demo", url: "https://mislineas.com.mx" }],
  },
  {
    cat: "AI / Vision",
    title: "Aether Archive",
    kicker: "NASA image explorer",
    problem: "NASA's public image archive is massive and the official search tool is too literal — it surfaces what you typed, not what you meant.",
    solution: "A cleaner interface over NASA's public API. Fast, filterable, designed to let you actually explore the archive.",
    role: "Full-stack engineer",
    result: "Something worth bookmarking. The kind of project people share because they want others to find it.",
    stack: ["Next.js", "React", "Tailwind CSS", "NASA API", "Motion"],
    meta: { Type: "Web app", Status: "Active" },
    image: "/projects/aether-archive.png",
    links: [{ label: "Demo", type: "demo", url: "https://aether-archive.vercel.app/" }],
  },
  {
    cat: "Internal Tools",
    title: "El Salmantino Hub",
    kicker: "Newsroom operations platform",
    problem: "A radio newsroom ran its entire operation across separate spreadsheets — shifts, payroll, commissions, expense tracking, loans. No shared state, constant sync errors.",
    solution: "One internal platform covering the full ops surface: journalist scheduling, payroll calculations, commissions, expenses, employee loans. Built for real workflows, not demos.",
    role: "Full-stack engineer",
    result: "Spreadsheets gone. Three years in production without a major incident. Management got an audit trail for the first time.",
    stack: ["PHP", "Laravel", "MySQL", "Node.js", "Docker", "APIs"],
    meta: { Type: "Internal tooling", Status: "In production" },
    image: "/projects/salmantino-hub.jpeg",
    links: [],
  },
  {
    cat: "Internal Tools",
    title: "Guion App",
    kicker: "Radio station management",
    problem: "A radio news station managed employee activities and social publishing manually — no unified view of what was happening, no automation.",
    solution: "A web app integrating WordPress and Facebook APIs: employee activity tracking, newsroom oversight, and one-click social publishing.",
    role: "Full-stack engineer",
    result: "Daily Facebook publishing went from a manual multi-step process to a single click. Coordination overhead dropped noticeably in the first week.",
    stack: ["Laravel", "PHP", "jQuery", "MySQL", "Firebase", "WordPress API", "Facebook API"],
    meta: { Type: "Internal tooling", Status: "Delivered" },
    image: "/projects/guionapp.png",
    links: [],
  },
  {
    cat: "AI / Vision",
    title: "NeuraZam",
    kicker: "Real-time music detection",
    problem: "Building something like Shazam from scratch to understand how audio fingerprinting actually works — CNNs, spectrogram matching, live mic input.",
    solution: "A real-time music detection system using convolutional neural networks trained on audio fingerprints, with a web frontend for live mic input.",
    role: "ML engineer & full-stack developer",
    result: "It works. Not production-grade, but the core fingerprinting pipeline identifies songs from a live mic feed with reasonable accuracy.",
    stack: ["Astro", "Docker", "Python", "TypeScript", "PyTorch"],
    meta: { Type: "AI app", Status: "Open source" },
    image: "/projects/neurazam.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/NeuraZam" }],
  },
  {
    cat: "AI / Vision",
    title: "SignSense",
    kicker: "ASL recognition app",
    problem: "Wanted to build something that runs ML inference in the browser from a live camera feed — ASL recognition was the right scope to make it non-trivial.",
    solution: "A real-time ASL alphabet classifier using a trained model served through the browser, no backend, just camera input and immediate output.",
    role: "ML engineer & full-stack developer",
    result: "Runs entirely in the browser. Good enough to demonstrate real-time classification; good enough to build on.",
    stack: ["Astro", "Docker", "Python", "TypeScript"],
    meta: { Type: "AI app", Status: "Open source" },
    image: "/projects/signsense.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/SignSense" }],
  },
  {
    cat: "Web Platform",
    title: "DICIS Tracker",
    kicker: "Campus resource finder",
    problem: "Finding a free classroom or a professor at DICIS meant checking a printed schedule or asking around. Nobody had time for that.",
    solution: "Scraped the university's scheduling system and built a lightweight tool that shows available classrooms and professors in real time.",
    role: "Full-stack engineer",
    result: "Students use it. Apparently it spreads by word of mouth — I find out it's still running when someone DMs me about it.",
    stack: ["Python", "Next.js", "Web Scraping", "Motion"],
    meta: { Type: "Web app", Status: "Live" },
    image: "/projects/dicis-tracker.png",
    links: [{ label: "Demo", type: "demo", url: "https://dicis-tracker.vercel.app/" }],
  },
  {
    cat: "Web Platform",
    title: "Thermodynamics Lab",
    kicker: "University lab web app",
    problem: "The thermodynamics lab at DICIS had no web presence — students couldn't find schedules, resources, or contact information online.",
    solution: "A clean web app for the lab: schedules, resources, staff info. Built with the engineering students as the actual users in mind.",
    role: "Full-stack engineer",
    result: "The lab has a working web presence. Faculty and students use it regularly.",
    stack: ["Astro", "Tailwind CSS", "PostgreSQL"],
    meta: { Type: "Web app", Status: "Live" },
    image: "/projects/thermodynamics-lab.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/Thermodynamics-Lab-Web" }],
  },
  {
    cat: "Internal Tools",
    title: "Weather Video Parser",
    kicker: "Automated forecast video production",
    problem: "Producing daily weather forecast videos required manual editing — assembling assets, writing scripts, matching narration. Same work, every day.",
    solution: "A desktop app that takes weather data and automates the full video production pipeline: FFmpeg for rendering, Whisper for speech-to-text, NLP to structure the script.",
    role: "Engineer & automation architect",
    result: "Daily video production time dropped significantly. The output is consistent in a way that manual editing wasn't.",
    stack: ["Electron", "Python", "FFmpeg", "Whisper", "NLP"],
    meta: { Type: "Desktop app", Status: "Delivered" },
    image: "/projects/weather-video-parser.png",
    links: [],
  },
  {
    cat: "Internal Tools",
    title: "Weighing System",
    kicker: "Grocery store label printer",
    problem: "A small grocery store needed to weigh products and print barcode labels. Every solution on the market was either overkill or tied to a specific POS system.",
    solution: "A desktop app that connects to the store's scale, reads the weight, and prints formatted labels with barcodes. Nothing more, nothing less.",
    role: "Engineer",
    result: "The store uses it every day. Replaced a manual process that was causing checkout errors.",
    stack: ["Electron", "Tailwind CSS"],
    meta: { Type: "Desktop app", Status: "Delivered" },
    image: "/projects/weighing-system.png",
    links: [],
  },
]

export const CONTACT = {
  heading: ["Got something to build?", "Let's talk."],
  lede: "Open to engineering roles and freelance projects. Email is fastest — I usually reply the same day.",
  links: [
    { label: "Email",    value: "contact@moraxh.dev",             href: "mailto:contact@moraxh.dev",                                         icon: "mail"     as const },
    { label: "LinkedIn", value: "in/jorge-emiliano-mora-herrera", href: "https://www.linkedin.com/in/jorge-emiliano-mora-herrera-919571256", icon: "linkedin" as const },
    { label: "GitHub",   value: "moraxh",                         href: "https://github.com/moraxh",                                         icon: "github"   as const },
    { label: "Résumé",   value: "Download PDF",                   href: "/cv/Jorge_Mora_CV.pdf",                                             icon: "doc"      as const },
  ],
}
