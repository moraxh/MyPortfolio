import { Tooltip, TooltipContent, TooltipTrigger } from "@layouts/components/ui/tooltip";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner"
import { motion } from "motion/react"

export default function Contact() {
  const email = "jorgemorah671@gmail.com"

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!")
      })
      .catch((err) => {
        toast.error("Failed to copy email.")
      })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-900 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans"
        >
          Ready to <span className="text-cyan-400">innovate</span>?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mb-12 max-w-xl mx-auto text-lg"
        >
          I'm always open to new tech challenges, AI collaborations, and disruptive projects. Let's connect.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => copyEmailToClipboard()} className="hover:cursor-pointer group flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-cyan-900 transition-colors">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white font-mono">{email}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-mono text-sm">Click to copy email</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-8"
        >
            {[
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/jorge-emiliano-mora-herrera-919571256", label: "LinkedIn" },
              { icon: <Github size={24} />, href: "https://github.com/moraxh", label: "GitHub" },
            ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.3, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 hover:text-cyan-400 transition-all transform duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
            ))}
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-slate-900 text-gray-600 font-mono text-sm">
            <p>© {new Date().getFullYear()} MoraXh. Built with Astro + React + Tailwind</p>
        </footer>
      </div>
    </section>
  )
}