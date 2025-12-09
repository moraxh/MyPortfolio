import { useEffect, useState } from "react"
import { Hexagon, Menu, X } from 'lucide-react'

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
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-40 transition-all border-white/10 duration-300 ${scrolled ? 'bg-slate-950/70 backdrop-blur-lg border-b py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
           <Hexagon className="text-cyan-500 group-hover:rotate-180 transition-transform duration-500" />
           <span className="font-bold text-xl text-white tracking-wider font-mono">MORAXH<span className="text-cyan-500">.DEV</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-cyan-400 font-mono text-sm uppercase tracking-widest transition-colors hover:shadow-[0_2px_0_0_#00f0ff]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-gray-800 p-6 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-cyan-400 font-mono text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}