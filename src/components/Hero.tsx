import { ArrowDown, Cpu, Terminal } from "lucide-react";
import { motion, type Variants } from "motion/react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <motion.div 
        className="max-w-4xl w-full z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-6"
        >
            <span className="px-3 py-1 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono bg-cyan-950/20 backdrop-blur-sm">
              Hello, I'm MoraXH
            </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 font-sans tracking-tight">
          <span className="text-white block">Building the</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-600 block mt-2 relative">
            Digital Future
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Full Stack Developer & AI Engineer specializing in building immersive web experiences and scalable AI models.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 rounded overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-cyan-400/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative flex items-center gap-2 font-mono font-bold">
              <Terminal size={18} />
              See My Work
            </span>
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent hover:bg-purple-900/20 text-purple-400 border border-purple-900/50 hover:border-purple-500 transition-all duration-300 rounded flex items-center gap-2 font-mono"
          >
            <Cpu size={18} />
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-500/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  )
}