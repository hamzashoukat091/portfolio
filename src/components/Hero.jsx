import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle, ChevronDown, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import ParticleField from './ParticleField'
import { EASE } from './Reveal'
import { profile } from '../data/profile'
import headshot from '../assets/headshot.webp'

function useTypewriter(words, typeMs = 65, holdMs = 1700) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setText(words[0])
      return
    }
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? typeMs / 2.2 : typeMs,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typeMs, holdMs, reduced])

  return text
}

// Button that leans toward the cursor (magnetic), scales down on press.
function Magnetic({ children }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative flex min-h-dvh items-center overflow-hidden">
      {/* ambient light blobs */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 animate-blob rounded-full bg-neon/15 blur-[130px]" />
        <div className="absolute -right-24 top-1/2 h-80 w-80 animate-blob rounded-full bg-cyan-glow/12 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-violet-glow/10 blur-[110px] [animation-delay:-12s]" />
      </div>
      <div aria-hidden className="bg-grid absolute inset-0" />
      <ParticleField />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/10 px-4 py-1.5 font-mono text-xs text-neon-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for new projects
          </motion.div>

          <motion.p variants={item} className="mb-3 font-mono text-neon">
            $ whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Hamza Shoukat</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex min-h-[2.5rem] items-center text-xl font-medium text-fog sm:text-2xl"
          >
            <span className="mr-3 hidden text-line sm:inline">──</span>
            <span className="text-snow">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-neon sm:h-7" />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
            Senior AI Python Developer engineering{' '}
            <span className="text-snow">agentic systems</span> and{' '}
            <span className="text-snow">SaaS platforms</span> that serve{' '}
            <span className="font-semibold text-neon-2">10K+ users</span> and cut costs by{' '}
            <span className="font-semibold text-neon-2">40%</span>. {profile.tagline}.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="glow-ring group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-semibold text-ink transition-colors duration-300 hover:bg-neon-2"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                download
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-snow transition-all duration-300 hover:border-neon/40 hover:text-neon-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-fog transition-colors duration-300 hover:text-neon-2"
              >
                <MessageCircle className="h-4 w-4" />
                Let&apos;s Talk
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="glass rounded-full p-3 text-fog transition-all duration-300 hover:-translate-y-1 hover:text-neon"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="glass rounded-full p-3 text-fog transition-all duration-300 hover:-translate-y-1 hover:text-neon"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.p variants={item} className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-fog">
            <MapPin className="h-4 w-4 text-neon" />
            {profile.location} · {profile.company}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="relative mx-auto hidden w-full max-w-sm sm:block lg:mx-0"
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-neon/20 via-cyan-glow/10 to-transparent blur-2xl" />
          <div className="relative animate-float">
            <div className="glass glow-ring rounded-[2rem] p-2.5 shadow-2xl shadow-black/40">
              <img
                src={headshot}
                alt={`${profile.name} — ${profile.role}`}
                width={900}
                height={900}
                className="aspect-square w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
              className="glass-strong absolute -left-5 bottom-6 flex items-center gap-2 rounded-xl px-4 py-3 shadow-xl shadow-black/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
              </span>
              <span className="font-mono text-xs text-snow">4+ yrs · AI Engineering</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-fog transition-colors hover:text-neon"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
