import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900/50"
    >
      <motion.div
        className="h-full bg-linear-to-r from-cyan-400 to-purple-600 origin-left"
        style={{
          scaleX: scrollYProgress
        }}
      />
    </motion.div>
  )
}