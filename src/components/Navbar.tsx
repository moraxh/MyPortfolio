import { useEffect, useState } from "react"
import { Hexagon, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from "motion/react"

export function AnimatedMenuIcon({ open } : { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Línea superior */}
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        animate={
          open
            ? {
                y1: 12,
                y2: 12,
                rotate: 45,
                originX: "50%",
                originY: "50%",
              }
            : {
                y1: 6,
                y2: 6,
                rotate: 0,
              }
        }
        transition={{ duration: 0.25 }}
      />

      {/* Línea central */}
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Línea inferior */}
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        animate={
          open
            ? {
                y1: 12,
                y2: 12,
                rotate: -45,
                originX: "50%",
                originY: "50%",
              }
            : {
                y1: 18,
                y2: 18,
                rotate: 0,
              }
        }
        transition={{ duration: 0.25 }}
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-40 transition-all border-white/10 duration-300 ${scrolled ? 'bg-slate-950/70 backdrop-blur-lg border-b py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2 group"
          animate={{ 
            y: [ -50, 0 ], 
            transition: { 
              duration: 0.5, 
              delay: 0.2, 
              ease: 'easeInOut' 
            } 
          }}
        >
           <Hexagon className="text-cyan-500 group-hover:rotate-180 transition-transform duration-500" />
           <span className="font-bold text-xl text-white tracking-wider font-mono">MORAXH<span className="text-cyan-500">.DEV</span></span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-cyan-400 font-mono text-sm uppercase tracking-widest transition-colors after:content-[''] after:block after:bg-cyan-400 after:h-0.5 after:right-full after:relative overflow-hidden hover:after:right-0 after:transition-all after:duration-300"
              animate={{ 
                y: [ -50, 0 ], 
                transition: { 
                  duration: 0.5,
                  delay: 0.4 + i * 0.1, 
                  ease: 'easeInOut' 
                }
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <AnimatedMenuIcon open={isOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-gray-800 p-6 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-cyan-400 font-mono text-lg"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 + i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}