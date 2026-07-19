import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal, { EASE } from './Reveal'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-violet-glow/8 blur-[130px]" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          kicker="experience"
          title="The road so far"
          blurb="Every role sharpened the same edge: Python, data and AI in production."
        />

        <div className="relative">
          {/* animated spine */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute left-[19px] top-2 h-full w-px origin-top bg-gradient-to-b from-neon via-cyan-glow/50 to-transparent sm:left-1/2"
          />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={job.company} delay={i * 0.1}>
                  <div className={`relative flex flex-col gap-4 pl-14 sm:w-1/2 sm:pl-0 ${
                    left ? 'sm:pr-14' : 'sm:ml-auto sm:pl-14'
                  }`}>
                    <span
                      className={`absolute left-2.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full border border-neon/40 bg-ink text-neon shadow-[0_0_18px_-2px_rgba(34,197,94,0.5)] sm:top-1 ${
                        left ? 'sm:left-auto sm:-right-[18px]' : 'sm:-left-[18px]'
                      }`}
                    >
                      <Briefcase className="h-4 w-4" />
                    </span>

                    <div className="sheen glass rounded-2xl p-6 transition-colors duration-300 hover:border-neon/30">
                      <p className="font-mono text-xs tracking-wide text-neon-2">{job.period}</p>
                      <h3 className="mt-2 text-lg font-bold text-snow">{job.role}</h3>
                      <p className="text-sm font-medium text-cyan-glow">{job.company}</p>
                      <ul className="mt-4 space-y-2">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-fog">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neon/70" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
