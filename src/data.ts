export const META = {
  name: "Jorge Mora",
  handle: "MoraXH",
  email: "jorgemorah671@gmail.com",
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
  status: "Open to engineering roles & select freelance",
  h1: "Jorge Mora",
  lede: "Software engineer building practical AI systems, web platforms, and internal tools.",
  sub: [
    "I work across the stack, from ",
    "software architecture and automation to computer vision",
    ", shipping web products and internal systems that real teams use every day.",
  ],
  cta: { projects: "View Projects", cv: "Download CV", contact: "Contact" },
}

export const STATUS_PANEL = {
  title: "status",
  rows: [
    { label: "Availability", value: "Open",                  highlight: true },
    { label: "Focus",        value: "Applied AI · Web platforms", highlight: false },
    { label: "Based in",     value: "México · GMT−6",        highlight: false },
    { label: "Local time",   value: "clock",                 highlight: false },
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
    "I build software end to end, and I care most about the parts users never see: the architecture decisions, the data flow, the boring reliability that makes a product trustworthy.",
    "Over the last few years I've led the design and implementation of real systems: a talent-management SaaS, an on-device computer-vision pipeline, internal tools for newsroom and business operations. I'm comfortable owning a problem from architecture through deployment.",
    "My approach to AI is practical, not promotional. I reach for machine learning when it measurably solves a problem, and for plain, well-structured code when it doesn't. Either way, the goal is the same: systems that hold up in production.",
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
      "Lead architecture and implementation for a talent-management SaaS, from data model to deployment.",
      "Design scalable microservices architectures and manage cloud infrastructure and CI/CD pipelines.",
      "Integrate ML and LLM models into production and implement secure authentication systems.",
    ],
    tags: ["Microservices", "React", "Node.js", "Python", "Docker", "Cloud", "CI/CD"],
  },
  {
    when: "2022 - 2025",
    now: false,
    role: "Software Developer",
    org: "El Salmantino",
    bullets: [
      "Designed and developed an internal platform for a radio news outlet, improving workflow organization and operational efficiency.",
      "Built internal tools that replaced manual spreadsheets across editorial and business teams.",
      "Integrated multiple APIs and optimized system architecture to enhance performance.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "APIs", "Web Architecture", "Node.js"],
  },
]

export const SKILLS = [
  {
    n: "01",
    title: "Frontend",
    desc: "Accessible, fast interfaces and component systems built to scale.",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "Astro", "Electron"],
  },
  {
    n: "02",
    title: "Backend",
    desc: "APIs and services designed around clear data models and contracts.",
    items: ["Node.js", "Python", "PHP", "FastAPI", "Laravel", "REST", "GraphQL"],
  },
  {
    n: "03",
    title: "AI / Computer Vision",
    desc: "Practical ML, from training to on-device, real-time inference.",
    items: ["PyTorch", "TensorFlow", "OpenCV", "ONNX", "WebAssembly", "NLP", "OCR"],
  },
  {
    n: "04",
    title: "Infrastructure",
    desc: "Reproducible deployments and pipelines that don't surprise you.",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Nginx", "Linux", "Vercel"],
  },
  {
    n: "05",
    title: "Databases",
    desc: "Modeling, querying and keeping data consistent under load.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Vector DBs"],
  },
  {
    n: "06",
    title: "Tools",
    desc: "The everyday kit for shipping and collaborating with intent.",
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
    problem: "HR and recruiting teams were tracking candidates, roles and pipelines across disconnected spreadsheets, slow, error-prone and impossible to audit.",
    solution: "An end-to-end talent-management platform with a single source of truth: candidate pipelines, role tracking, and role-based access, designed to replace the spreadsheet sprawl.",
    role: "Lead architect & full-stack engineer",
    result: "Centralized hiring operations into one auditable system, with a data model built to grow alongside the team.",
    stack: ["React", "Node.js", "PostgreSQL", "TypeScript", "Microservices", "Docker"],
    meta: { Type: "SaaS product", Year: "2023 - now", Status: "In production" },
    image: "/projects/al1a.png",
    links: [],
  },
  {
    cat: "AI / Vision",
    title: "FrameFind",
    kicker: "Real-time glasses detection",
    problem: "Optical retail needed a way to detect and analyze eyeglasses on a face in real time, without sending video to the cloud or relying on a constant connection.",
    solution: "An on-device computer-vision pipeline using MediaPipe for face landmark detection and a lightweight ONNX model (~6.2 MB), with WASM and WebGPU acceleration support.",
    role: "Computer-vision / ML engineer",
    result: "Real-time detection running fully on-device, keeping inference private and responsive without server round-trips.",
    stack: ["Python", "OpenCV", "ONNX", "PyTorch", "WebAssembly", "WebGPU", "React", "TypeScript"],
    meta: { Type: "CV pipeline", Year: "2024", Status: "Prototype → pilot" },
    image: "/projects/framefind.png",
    links: [{ label: "Demo", type: "demo", url: "https://framefind.moraxh.dev" }],
  },
  {
    cat: "Web Platform",
    title: "Mis Líneas",
    kicker: "Mobile carrier checker",
    problem: "Users had no single place to check all phone lines registered under their CURP, making it impossible to detect identity misuse or unauthorized registrations.",
    solution: "A fast web app that aggregates mobile carriers and MVNOs in Mexico, letting users check all registered lines via a single CURP query in real time.",
    role: "Full-stack engineer & designer",
    result: "Gave users a quick, reliable tool to detect unauthorized phone registrations and identity misuse.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    meta: { Type: "Web app", Year: "2023", Status: "Live" },
    image: "/projects/mislineas.png",
    links: [{ label: "Live", type: "demo", url: "https://mislineas.com.mx" }],
  },
  {
    cat: "AI / Vision",
    title: "Aether Archive",
    kicker: "NASA image explorer",
    problem: "NASA has one of the largest image archives ever assembled, but its native search tool is too literal to surface what people are actually looking for.",
    solution: "A better interface over NASA's public API, fast, clean, and unaffiliated, that makes the archive genuinely explorable.",
    role: "Full-stack engineer",
    result: "Turned a sprawling public archive into a browsable, searchable interface that feels designed for humans.",
    stack: ["Next.js", "React", "Tailwind CSS", "NASA API", "Motion"],
    meta: { Type: "Web app", Year: "2024", Status: "Active" },
    image: "/projects/aether-archive.png",
    links: [{ label: "Demo", type: "demo", url: "https://aether-archive.vercel.app/" }],
  },
  {
    cat: "Internal Tools",
    title: "El Salmantino Hub",
    kicker: "Newsroom operations platform",
    problem: "Editorial and business teams ran critical workflows by hand: scheduling shifts, tracking payroll, commissions, loans, with no shared state and frequent mistakes.",
    solution: "An internal platform modeling newsroom operations and administrative processes: journalist scheduling, payroll, commissions, expenses, and employee loans in one system.",
    role: "Full-stack engineer",
    result: "Centralized day-to-day operations, eliminated manual spreadsheet errors, and gave management a reliable audit trail.",
    stack: ["PHP", "Laravel", "MySQL", "Node.js", "Docker", "APIs"],
    meta: { Type: "Internal tooling", Year: "2022 - 2025", Status: "In production" },
    image: "/projects/salmantino-hub.jpeg",
    links: [],
  },
  {
    cat: "Internal Tools",
    title: "Guion App",
    kicker: "Radio station management",
    problem: "A radio news station had no unified system to manage employee activities, automate Facebook publishing, and oversee newsroom operations.",
    solution: "A business web app integrating WordPress and Facebook APIs to manage the radio station, supervise employee activities, and automate social media processes.",
    role: "Full-stack engineer",
    result: "Replaced manual processes with an integrated system that reduced coordination overhead and automated content publishing.",
    stack: ["Laravel", "PHP", "jQuery", "MySQL", "Firebase", "WordPress API", "Facebook API"],
    meta: { Type: "Internal tooling", Year: "2022", Status: "Delivered" },
    image: "/projects/guionapp.png",
    links: [],
  },
  {
    cat: "AI / Vision",
    title: "NeuraZam",
    kicker: "Real-time music detection",
    problem: "Identifying songs from live microphone audio requires low-latency inference with high accuracy across a large fingerprint database.",
    solution: "A real-time music detection system using convolutional neural networks to identify songs from live audio input through the user's microphone.",
    role: "ML engineer & full-stack developer",
    result: "Built a working Shazam-style system demonstrating real-time CNN-based audio fingerprinting in a web environment.",
    stack: ["Astro", "Docker", "Python", "TypeScript", "PyTorch"],
    meta: { Type: "AI app", Year: "2024", Status: "Open source" },
    image: "/projects/neurazam.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/NeuraZam" }],
  },
  {
    cat: "AI / Vision",
    title: "SignSense",
    kicker: "ASL recognition app",
    problem: "American Sign Language recognition from camera input requires fast, accurate ML inference running in a web context with real-time feedback.",
    solution: "A real-time sign language recognition web application using machine learning to detect and classify ASL alphabet letters through camera input.",
    role: "ML engineer & full-stack developer",
    result: "Delivered a working real-time ASL classifier accessible entirely in-browser without any native app installation.",
    stack: ["Astro", "Docker", "Python", "TypeScript"],
    meta: { Type: "AI app", Year: "2023", Status: "Open source" },
    image: "/projects/signsense.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/SignSense" }],
  },
  {
    cat: "Web Platform",
    title: "DICIS Tracker",
    kicker: "Campus resource finder",
    problem: "DICIS students had no fast way to find available classrooms or professors in real time, relying on outdated printed schedules.",
    solution: "A lightweight tool that web-scrapes the university schedule system and surfaces available classrooms and professors in real time.",
    role: "Full-stack engineer",
    result: "Gave students an instant, mobile-friendly way to find free spaces on campus without talking to administration.",
    stack: ["Python", "Next.js", "Web Scraping", "Motion"],
    meta: { Type: "Web app", Year: "2023", Status: "Live" },
    image: "/projects/dicis-tracker.png",
    links: [{ label: "Demo", type: "demo", url: "https://dicis-tracker.vercel.app/" }],
  },
  {
    cat: "Web Platform",
    title: "Thermodynamics Lab",
    kicker: "University lab web app",
    problem: "The thermodynamics lab at the University of Guanajuato had no web presence for students to access resources, schedules, or lab information.",
    solution: "A web application built for the thermodynamics lab at DICIS, providing students and staff access to lab resources and information.",
    role: "Full-stack engineer",
    result: "Delivered a modern, maintained web presence for the lab used by students and faculty at the Division of Engineering.",
    stack: ["Astro", "Tailwind CSS", "PostgreSQL"],
    meta: { Type: "Web app", Year: "2023", Status: "Live" },
    image: "/projects/thermodynamics-lab.png",
    links: [{ label: "Code", type: "github", url: "https://github.com/moraxh/Thermodynamics-Lab-Web" }],
  },
  {
    cat: "Internal Tools",
    title: "Weather Video Parser",
    kicker: "Automated forecast video production",
    problem: "Producing weather forecast videos with a consistent format required time-consuming manual editing across assets, scripts, and narration.",
    solution: "A desktop app that automates forecast video production using FFmpeg for rendering, Whisper for speech-to-text, and NLP to process and structure weather data.",
    role: "Engineer & automation architect",
    result: "Cut video production time significantly by replacing manual editing with a semi-automated pipeline with consistent output quality.",
    stack: ["Electron", "Python", "FFmpeg", "Whisper", "NLP"],
    meta: { Type: "Desktop app", Year: "2023", Status: "Delivered" },
    image: "/projects/weather-video-parser.png",
    links: [],
  },
  {
    cat: "Internal Tools",
    title: "Weighing System",
    kicker: "Grocery store label printer",
    problem: "A grocery store needed a fast, reliable way to weigh products and print labels with weight and barcode without a complex POS system.",
    solution: "A lightweight desktop application that connects to a scale, captures weight, and prints formatted barcode labels for grocery products.",
    role: "Engineer",
    result: "Gave the store a simple, dependable tool that reduced checkout errors and replaced a manual labeling process.",
    stack: ["Electron", "Tailwind CSS"],
    meta: { Type: "Desktop app", Year: "2022", Status: "Delivered" },
    image: "/projects/weighing-system.png",
    links: [],
  },
]

export const CONTACT = {
  heading: ["Let's build something", "that holds up."],
  lede: "I'm open to engineering roles and a small number of freelance projects. The fastest way to reach me is email, I usually reply within a day.",
  links: [
    { label: "Email",    value: "jorgemorah671@gmail.com",        href: "mailto:jorgemorah671@gmail.com",                                  icon: "mail"     as const },
    { label: "LinkedIn", value: "in/jorge-emiliano-mora-herrera", href: "https://www.linkedin.com/in/jorge-emiliano-mora-herrera-919571256", icon: "linkedin" as const },
    { label: "GitHub",   value: "moraxh",                         href: "https://github.com/moraxh",                                         icon: "github"   as const },
    { label: "Résumé",   value: "Download PDF",                   href: "/cv/Jorge_Mora_CV.pdf",                                             icon: "doc"      as const },
  ],
}
