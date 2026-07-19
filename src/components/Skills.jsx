import { useRef, useState } from 'react'
import {
  motion, AnimatePresence, useAnimationFrame, useMotionValue, useReducedMotion,
  useScroll, useSpring, useTransform, useVelocity,
} from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal, { EASE } from './Reveal'
import { skillGroups, techMarquee } from '../data/profile'

const wrap = (min, max, v) => min + ((((v - min) % (max - min)) + (max - min)) % (max - min))

// Marquee that drifts left on its own and reacts to scroll: scrolling down
// accelerates it, scrolling up reverses it. Slows to a crawl on hover.
function VelocityMarquee({ items }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const smoothVelocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], { clamp: false })
  const direction = useRef(-1)
  const hovering = useRef(false)
  const reduced = useReducedMotion()
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduced) return
    const vf = velocityFactor.get()
    if (vf < 0) direction.current = 1
    else if (vf > 0) direction.current = -1
    let moveBy = direction.current * 1.7 * (delta / 1000)
    moveBy += moveBy * Math.abs(vf) * 2.2
    if (hovering.current) moveBy *= 0.15
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div
      onPointerEnter={() => { hovering.current = true }}
      onPointerLeave={() => { hovering.current = false }}
      className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <motion.div style={{ x }} className="flex w-max gap-4 pr-4">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="glass rounded-full px-5 py-2 font-mono text-sm text-fog transition-colors duration-200 hover:border-neon/40 hover:text-neon-2"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function Bar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-snow">{name}</span>
        <span className="font-mono text-xs text-neon-2">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-line/40">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: EASE, delay }}
          className="h-full rounded-full bg-gradient-to-r from-neon to-cyan-glow"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id)
  const group = skillGroups.find((g) => g.id === active)

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-glow/8 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="skills"
          title="An arsenal built for the AI era"
          blurb="Four disciplines, one goal: intelligent software that pays for itself."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                active === g.id ? 'text-ink' : 'glass text-fog hover:text-snow'
              }`}
            >
              {active === g.id && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-neon"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{g.label}</span>
            </button>
          ))}
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <p className="mb-8 text-center font-mono text-sm text-fog">
                <span className="text-neon"># </span>
                {group.blurb}
              </p>
              <div className="grid gap-7 sm:grid-cols-2">
                {group.skills.map((s, i) => (
                  <Bar key={s.name} {...s} delay={0.1 + i * 0.08} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* tech marquee — speed and direction follow scroll velocity */}
      <Reveal className="mt-16" y={16}>
        <VelocityMarquee items={techMarquee} />
      </Reveal>
    </section>
  )
}
