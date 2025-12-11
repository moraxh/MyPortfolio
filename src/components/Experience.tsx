import { motion } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "aliA",
    role: "Lead Software Engineer",
    period: "2025 - Present",
    description: "Lead a team of developers and design scalable microservices architectures. Build full-stack applications, implement secure authentication, integrate ML and LLM models into production, and manage cloud infrastructure and CI/CD pipelines.",
    technologies: ["Microservices", "CI/CD", "Docker", "Cloud", "Python", "React", "Node.js", "APIs"]
  },
  {
    company: "El Salmantino",
    role: "Software Developer",
    period: "2022 - 2025",
    description: "Designed and developed an internal platform for a radio news outlet, improving workflow organization and operational efficiency. Integrated multiple APIs and optimized system architecture to enhance performance.",
    technologies: ["PHP", "Laravel", "MySQL", "APIs", "Web Architecture"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Professional <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My path in the tech industry and the value I've delivered along the way.
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 mt-1.5 z-10 hidden md:block shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

              {/* Content */}
              <div className="flex-1 md:w-1/2"></div>
              <div className="flex-1 md:w-1/2">
                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/30 transition-all hover:bg-slate-900/50 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white font-sans group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="flex items-center gap-1 text-sm text-cyan-400 font-mono bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-gray-300 font-medium">
                    <Briefcase size={16} className="text-purple-400" />
                    {exp.company}
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-gray-500 font-mono">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
