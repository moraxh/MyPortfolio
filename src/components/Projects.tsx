import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, Github, Code2 } from "lucide-react"
import Image from "@components/common/Image"

interface Project {
  title: string
  description: string
  tags: string[]
  links: {
    github?: string
    demo?: string
  }
  image: string
}

const newLocal = ""
const projects: Project[] = [
  { 
    title: "al1A",
    description: "I led a team to build a SaaS platform designed to manage and optimize organizational talent through automation tools and AI-driven insights. The system leveraged machine learning to identify performance patterns, uncover areas for improvement, and generate actionable workforce intelligence. I served as both the software architect and technical lead, overseeing system design, scalability, and implementation.",
    tags: ["Microservices", "DevOps", "Docker", "Kubernetes"],
    links: {},
    image: "/projects/al1a.png"
  },
  {
    title: "Guion App",
    description: "A business web application designed to manage a radio news station, overseeing and supervising employee activities using WordPress and Facebook APIs. It also includes the management of a Facebook page for process automation.",
    tags: ["Laravel", "PHP", "JQuery", "MySQL", "Firebase"],
    links: {},
    image: "/projects/guionapp.png"
  },
  {
    title: "Aether Archive",
    description: "NASA has one of the largest image archives ever, but its search tool falls short. Aether Archive fixes that with a better interface using NASA’s public API, free and unaffiliated.",
    tags: ["Next.js", "React", "Tailwind CSS", "NASA API", "Motion"],
    links: {
      demo: "https://aether-archive.vercel.app/"
    },
    image: "/projects/aether-archive.png"
  },
  {
    title: "Thermodynamics Lab Web",
    description: "A web application for a thermodynamics lab located in the Division of Engineering at the University of Guanajuato.",
    tags: ["Astro", "Tailwind CSS", "PostgreSQL"],
    links: {
      github: "https://github.com/moraxh/Thermodynamics-Lab-Web"
    },
    image: "/projects/thermodynamics-lab.png"
  },
  {
    title: "DICIS Tracker",
    description: "This is a fast, lightweight tool designed specifically for students at DICIS (Engineering Division, Irapuato–Salamanca Campus, University of Guanajuato) to quickly find available classrooms or professors in real time.",
    tags: ["Python", "Next.js", "Web Scraping", "Motion"],
    links: {
      demo: "https://dicis-tracker.vercel.app/"
    },
    image: "/projects/dicis-tracker.png"
  },
  {
    title: "El Salmantino Hub",
    description: "An internal platform for a newspaper designed to manage newsroom operations and administrative processes. It included features for scheduling journalistic shifts, handling payroll, tracking commissions, managing expenses, and administering employee loans, providing a centralized system to streamline both editorial and financial workflows.",
    tags: ["Microservices", "Docker", "Kubernetes", "Python", "Node.js"],
    links: {},
    image: "/projects/salmantino-hub.jpeg"
  },
  {
    title: "Weather Video Parser",
    description: "A desktop application designed to automate the production of weather forecast videos with a consistent format and visual style. The system streamlined the editing pipeline by integrating pre-rendered assets with dynamic content generation using FFmpeg. It leveraged speech-to-text capabilities (Whisper) and NLP techniques to process and structure weather data, enabling efficient, scalable, and semi-automated video creation.",
    tags: ["Electron", "Python"],
    links: {},
    image: "/projects/weather-video-parser.png"
  },
  {
    title: "NeuraZam",
    description: "A real-time music detection system that uses convolutional neural networks to identify songs from live audio input through the user's microphone.",
    tags: ["Astro", "Docker", "Python", "Typescript", "Pytorch"],
    links: {
      github: "https://github.com/moraxh/NeuraZam"
    },
    image: "/projects/neurazam.png"
  },
  {
    title: "Product Weighing System",
    description: "A desktop application for a grocery store that allows users to weigh products and print labels with the weight and barcode.",
    tags: ["Electron", "Tailwind CSS"],
    links: {},
    image: "/projects/weighing-system.png"
  },
  {
    title: "SignSense",
    description: "A real-time sign language recognition web application that uses machine learning to detect and classify American Sign Language (ASL) alphabet letters through camera input.",
    tags: ["Astro", "Docker", "Python", "Typescript"],
    links: {
      github: "https://github.com/moraxh/SignSense"
    },
    image: "/projects/signsense.png"
  },
]

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3)
  
  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  const loadMore = () => {
    setVisibleCount(prev => prev + 3)
  }

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, ranging from web applications to AI experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] flex flex-col cursor-pointer"
              >
                <div className={`h-48 w-full bg-linear-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    fallback={(
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                        <Code2 className="text-white/20 w-16 h-16" />
                      </div>
                    )}
                  />
                  {(project.links?.github || project.links?.demo) && (
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                      {project.links.github && (
                        <a href={project.links.github} aria-label="Github Project" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-cyan-400">
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} aria-label="Demo Page" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-cyan-400">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3 grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <motion.button 
              onClick={loadMore}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 rounded-full font-mono transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer"
            >
              Show More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
