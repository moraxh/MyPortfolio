import { motion } from "motion/react"
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Smartphone,
  Cpu,
  Globe,
  Terminal
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro", "Electron"]
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: ["PHP", "Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Redis", "Microservices"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    skills: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Computer Vision", "NLP"]
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="w-6 h-6 text-emerald-400" />,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Vercel"]
  }
]

// Helper component for the Brain icon since it's not imported in the main file yet
function Brain({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Technical <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that enables me to build end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl hover:border-purple-500/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-sans">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-sm text-gray-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
