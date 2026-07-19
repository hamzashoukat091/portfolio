import { useEffect, useRef } from 'react'

// Neural-network style particle canvas: drifting nodes, linked when close,
// gently attracted to the pointer. Pauses offscreen, respects reduced motion.
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const mouse = { x: -9999, y: -9999 }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((w * h) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const step = (now = performance.now()) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 180 && dist > 0.001) {
          p.vx += (dx / dist) * 0.012
          p.vy += (dy / dist) * 0.012
        }
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // slow twinkle, each node on its own phase
        const glow = 0.42 + 0.2 * Math.sin(now * 0.0012 + p.phase)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 222, 128, ${glow})`
        ctx.fill()
      }

      // node-to-node links: shift cyan -> neon and thicken as nodes converge
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            const t = 1 - d / 130
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${(34 + 40 * t) | 0}, ${(211 + 11 * t) | 0}, ${(238 - 110 * t) | 0}, ${0.05 + 0.15 * t})`
            ctx.lineWidth = 0.5 + 0.55 * t
            ctx.stroke()
          }
        }
      }

      // cursor joins the network: link nearby nodes to the pointer
      for (const p of particles) {
        const d = Math.hypot(mouse.x - p.x, mouse.y - p.y)
        if (d < 170) {
          const t = 1 - d / 170
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(74, 222, 128, ${0.04 + 0.18 * t})`
          ctx.lineWidth = 0.5 + 0.5 * t
          ctx.stroke()
        }
      }
      raf = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(step)
      } else {
        cancelAnimationFrame(raf)
      }
    })

    resize()
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
}
