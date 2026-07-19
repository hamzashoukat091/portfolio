import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Scroll indicator: mouse capsule with a travelling dot, cascading chevrons
// and a tracking label. Fades and slides away as soon as the user scrolls.
export default function ScrollCue() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 140], [1, 0])
  const y = useTransform(scrollY, [0, 140], [0, 28])

  return (
    <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        style={reduced ? undefined : { opacity, y }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
        className="group flex flex-col items-center gap-2.5 rounded-2xl px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-fog transition-colors duration-300 group-hover:text-neon-2">
          scroll
        </span>

        <span className="relative flex h-10 w-[1.55rem] justify-center rounded-full border border-line/90 bg-ink/30 backdrop-blur-sm transition-all duration-300 group-hover:border-neon/60 group-hover:shadow-[0_0_20px_-4px_rgba(34,197,94,0.55)]">
          <motion.span
            className="absolute top-1.5 h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(34,197,94,0.9)]"
            animate={reduced ? undefined : { y: [0, 16, 16], opacity: [0, 1, 0], scale: [0.7, 1, 0.5] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: [0.45, 0, 0.35, 1] }}
          />
        </span>

        <span aria-hidden className="flex flex-col items-center -space-y-2">
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={reduced ? undefined : { opacity: [0.15, 1, 0.15], y: [0, 3, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
            >
              <ChevronDown
                className="h-3.5 w-3.5 text-neon transition-transform duration-300 group-hover:translate-y-0.5"
                strokeWidth={2.5}
              />
            </motion.span>
          ))}
        </span>
      </motion.a>
    </div>
  )
}
