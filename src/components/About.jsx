import { motion } from 'framer-motion'
import { BrainCircuit, Rocket, ShieldCheck, GraduationCap, Award } from 'lucide-react'
import Reveal, { EASE } from './Reveal'
import SectionHeading from './SectionHeading'
import { profile, education, certifications } from '../data/profile'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI-Native Engineering',
    text: 'Agentic systems, tool use and LLM orchestration are my daily drivers — not buzzwords bolted on after.',
  },
  {
    icon: Rocket,
    title: 'Production, Not Prototypes',
    text: 'Systems I ship serve 10K+ real users. Reliability, observability and cost control come standard.',
  },
  {
    icon: ShieldCheck,
    title: 'Business-First Outcomes',
    text: '40% cost reduction, tickets resolved in seconds instead of hours. I measure success in client metrics.',
  },
]

const codeLines = [
  { t: 'class Engineer:', c: 'text-violet-glow' },
  { t: '    name = "Hamza Shoukat"', c: 'text-snow' },
  { t: '    stack = ["Python", "FastAPI", "LLMs"]', c: 'text-snow' },
  { t: '    focus = "agentic_ai"', c: 'text-snow' },
  { t: '', c: '' },
  { t: '    def ship(self, vision):', c: 'text-cyan-glow' },
  { t: '        return VirtualReality(vision)', c: 'text-neon-2' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        kicker="about"
        title="Building AI that actually works"
        blurb={profile.bio}
      />

      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="sheen glass group flex gap-5 rounded-2xl p-6 transition-all duration-300 hover:border-neon/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-snow">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.28} className="h-full">
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <GraduationCap className="h-5 w-5 text-cyan-glow" />
                  <h3 className="text-sm font-semibold text-snow">Education</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <p className="text-sm text-snow">{education.degree}</p>
                    <p className="mt-0.5 font-mono text-xs text-fog/70">
                      {education.school} · {education.period}
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.36} className="h-full">
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-violet-glow" />
                  <h3 className="text-sm font-semibold text-snow">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <p className="text-sm text-snow">{c.name}</p>
                      <p className="mt-0.5 font-mono text-xs text-fog/70">
                        {c.period ? `${c.issuer} · ${c.period}` : c.issuer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="lg:sticky lg:top-28">
          <motion.div
            whileHover={{ rotateX: 3, rotateY: -4, scale: 1.015 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{ transformStyle: 'preserve-3d', perspective: 900 }}
            className="glass animate-float rounded-2xl p-1 shadow-2xl shadow-black/40"
          >
            <div className="rounded-xl bg-ink/90 font-mono text-sm">
              <div className="flex items-center gap-2 border-b border-line/50 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-fog">engineer.py</span>
              </div>
              <div className="space-y-1.5 overflow-x-auto p-6">
                {codeLines.map((line, i) => (
                  <motion.pre
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
                    className={line.c}
                  >
                    <span className="mr-4 inline-block w-4 select-none text-right text-line">
                      {i + 1}
                    </span>
                    {line.t || ' '}
                  </motion.pre>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
