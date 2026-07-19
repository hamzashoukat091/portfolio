import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { testimonials } from '../data/profile'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        kicker="testimonials"
        title="Clients don't just get chatbots"
        blurb="They get intelligent systems that drive real business results."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.project} delay={i * 0.1}>
            <figure className="sheen glass relative h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/30">
              <Quote aria-hidden className="absolute right-6 top-6 h-8 w-8 text-line/60" />
              <div className="mb-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-snow">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line/40 pt-4">
                <p className="text-sm font-semibold text-snow">{t.author}</p>
                <p className="mt-0.5 font-mono text-xs text-fog">{t.project}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
