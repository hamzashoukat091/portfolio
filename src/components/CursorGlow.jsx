import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Soft radial glow that trails the pointer — desktop only.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const reduced = useReducedMotion()
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { damping: 28, stiffness: 220, mass: 0.6 })
  const sy = useSpring(y, { damping: 28, stiffness: 220, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine || reduced) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX - 200)
      y.set(e.clientY - 200)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y, reduced])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(34,197,94,0.09) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)',
      }}
    />
  )
}
