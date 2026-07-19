import { useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Bot, LineChart, Sparkles, Ticket, Database, Eye, ShoppingCart, Heart, ArrowUpRight, Lock,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal, { EASE } from './Reveal'
import { projects, projectCategories, profile } from '../data/profile'

import perfectcsr from '../assets/projects/perfectcsr.webp'
import openval from '../assets/projects/openval.webp'
import llmbots from '../assets/projects/llmbots.webp'
import drowsiness from '../assets/projects/drowsiness.webp'
import fimbay from '../assets/projects/fimbay.webp'
import fayvo from '../assets/projects/fayvo.webp'

const IMAGES = {
  'perfectcsr.webp': perfectcsr,
  'openval.webp': openval,
  'llmbots.webp': llmbots,
  'drowsiness.webp': drowsiness,
  'fimbay.webp': fimbay,
  'fayvo.webp': fayvo,
}

const ICONS = {
  bot: Bot,
  chart: LineChart,
  sparkles: Sparkles,
  ticket: Ticket,
  database: Database,
  eye: Eye,
  cart: ShoppingCart,
  heart: Heart,
}

// 3D tilt card that follows the cursor.
function TiltCard({ project, index }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const Icon = ICONS[project.icon] ?? Sparkles
  const image = project.image ? IMAGES[project.image] : null

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${px * 9}deg) rotateX(${py * -9}deg) translateY(-4px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="sheen glass group h-full cursor-pointer rounded-2xl p-6 transition-[transform,border-color,box-shadow] duration-300 will-change-transform hover:border-neon/35 hover:shadow-2xl hover:shadow-neon/5"
      >
        <div className={`relative mb-6 h-36 overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}>
          {image ? (
            <>
              <img
                src={image}
                alt={`${project.name} interface preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
            </>
          ) : (
            <>
              <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
              <Icon className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-snow/85 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-3" strokeWidth={1.3} />
            </>
          )}

          <span className="absolute right-3 top-3 rounded-full bg-ink/60 px-3 py-1 font-mono text-[11px] text-neon-2 backdrop-blur">
            {project.category}
          </span>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/live absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-neon/95 px-3 py-1.5 font-mono text-[11px] font-semibold text-ink transition-colors duration-200 hover:bg-neon-2"
            >
              Visit Live Site
              <span aria-hidden className="relative h-3 w-3 overflow-hidden">
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 ease-out group-hover/live:-translate-y-[160%] group-hover/live:translate-x-[160%]" />
                <ArrowUpRight className="absolute inset-0 h-3 w-3 -translate-x-[160%] translate-y-[160%] transition-transform duration-300 ease-out group-hover/live:translate-x-0 group-hover/live:translate-y-0" />
              </span>
            </a>
          ) : (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 font-mono text-[11px] text-fog backdrop-blur">
              <Lock className="h-3 w-3" />
              Private / Custom Build
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-snow transition-colors duration-200 group-hover:text-neon-2">
            {project.name}
          </h3>
          <span
            aria-hidden
            className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line/60 text-fog transition-all duration-300 group-hover:border-neon group-hover:bg-neon group-hover:text-ink group-hover:shadow-[0_0_16px_-2px_rgba(34,197,94,0.6)]"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-[160%] group-hover:translate-x-[160%]" />
            <ArrowUpRight className="absolute h-4 w-4 -translate-x-[160%] translate-y-[160%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-fog">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="rounded-md bg-line/30 px-2.5 py-1 font-mono text-[11px] text-fog">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        kicker="projects"
        title="Work that ships and scales"
        blurb="A selection of AI platforms, autonomous agents and products in production."
      />

      <Reveal className="mb-12 flex flex-wrap justify-center gap-2.5">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              filter === c ? 'text-ink' : 'glass text-fog hover:text-snow'
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="project-pill"
                className="absolute inset-0 rounded-full bg-neon"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <TiltCard key={p.name} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-14 text-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="group glass glow-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-snow transition-all duration-300 hover:border-neon/40 hover:text-neon-2"
        >
          More on GitHub
          <span aria-hidden className="relative h-4 w-4 overflow-hidden">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-[160%] group-hover:translate-x-[160%]" />
            <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-[160%] translate-y-[160%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </a>
      </Reveal>
    </section>
  )
}
