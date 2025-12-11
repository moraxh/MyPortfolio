import { motion } from "motion/react"
import { User, Code, Heart, Target } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0)
  const startedYear = 2022

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYearsOfExperience(currentYear - startedYear) 
  }, [])

  const stats = [
    { label: "Years of Experience", value: `+${yearsOfExperience}`, icon: <User className="w-6 h-6 text-cyan-400" /> },
    { label: "Projects Completed", value: "25+", icon: <Code className="w-6 h-6 text-purple-400" /> },
    { label: "Technologies Mastered", value: "20+", icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { label: "Organizations Served", value: "2+", icon: <Heart className="w-6 h-6 text-pink-400" /> }
  ]

  return (
    <section id="about" className="py-20 px-4 relative bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Software Engineer focused on building scalable systems, intelligent applications, and high-impact digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">
                Hi, I'm <span className="text-gradient bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Jorge Mora</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a Software Engineer specializing in full‑stack development, system architecture, and applied artificial intelligence. My experience includes leading software projects, building microservices-based platforms, and integrating machine learning models into production environments.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I have contributed to the development of high‑impact platforms such as internal newsroom systems and scalable cloud‑based applications. My work spans technologies like React, Node.js, Python, Laravel, and cloud infrastructure tools.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Outside of engineering, I continually explore advancements in AI, system design, and modern development practices to expand my technical proficiency.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl text-center hover:border-cyan-500/30 transition-colors group cursor-pointer"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 font-sans">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6 font-sans">
            What I'm passionate about
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full‑Stack Development",
              "Machine Learning",
              "System Architecture",
              "Cloud Engineering",
              "Data‑Driven Solutions",
              "Innovation"
            ].map((passion, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-cyan-300 font-mono text-sm hover:border-cyan-500/50 hover:bg-slate-700 transition-all cursor-default"
              >
                {passion}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CV Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 max-w-md mx-auto hover:border-cyan-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 font-sans">
              Want to know more?
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Download my resume to see my complete professional background, education, and achievements.
            </p>
            <motion.a
              href="/cv/Jorge_Mora_CV.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono font-bold rounded-lg transition-all duration-300 transform shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
