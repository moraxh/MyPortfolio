import { useEffect, useRef, useState } from "react"

export default function NeuronalBackground() {
  const [blurAlpha, setBlurAlpha] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const newAlpha = Math.max(0.1, 1 - scrollY / 1000)
          setBlurAlpha(1 - newAlpha)
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationFrameId: number

    let mouseX: number | null = null
    let mouseY: number | null = null

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()

    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 15000), 50)
    const connectionDistance = 200

    let time = 0

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.min(Math.random() * 2 + 1, 2)
      }

      update() {
        // Get attraction to mouse
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distSq = dx * dx + dy * dy

          const attractionRadius = 150

          if (distSq < attractionRadius * attractionRadius) {
            const dist = Math.sqrt(distSq)
            const force = (attractionRadius - dist) / attractionRadius * 0.03
            this.vx += (dx / dist) * force
            this.vy += (dy / dist) * force
          }
        }

        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = '#00f0ff'
        ctx.shadowBlur = 5
        ctx.shadowColor = '#00f0ff'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.1 // Velocity 

      // Update and draw particles
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistance * connectionDistance) {
            const dist = Math.sqrt(distSq)
            const alpha = 1 - dist / connectionDistance

            // Draw line
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.2})`; // Light cyan
            ctx.lineWidth = 1
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()

            // Draw pulse
            const pulsePhase = (time * 0.05) + (i * j * 0.02)
            const pulsePos = (pulsePhase % 2)

            if (pulsePos < 1 && alpha > 0.5) {
              const px = p1.x + (p2.x - p1.x) * pulsePos
              const py = p1.y + (p2.y - p1.y) * pulsePos

              ctx.beginPath()
              ctx.arc(px, py, 1.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255, 255, 255, ${(1 - pulsePos) * alpha})`
              ctx.fill()
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      window.addEventListener('resize', handleResize)
    }

    window.addEventListener('mousemove', onMouseMove)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div 
      className='fixed inset-0 z-0 pointer-events-none'
    >
      {/* Base BG */}
      <div className="absolute inset-0 bg-base"></div>

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_80%)]"></div>

      {/* Neuronal Connections Overlay */}
      <canvas ref={canvasRef} className='absolute inset-0 block' />

      {/* Background Blur */}
      <div className="absolute inset-0 backdrop-blur-lg backdrop-brightness-50" style={{ opacity: blurAlpha }}></div>
    </div>
  )
}