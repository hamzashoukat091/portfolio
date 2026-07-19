import { useState } from 'react'
import { Mail, Phone, MapPin, Send, BookOpen, Layers } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
  { icon: MapPin, label: 'Location', value: `${profile.location} · Remote worldwide`, href: null },
]

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: profile.socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: BookOpen, label: 'Medium', href: profile.socials.medium },
  { icon: Layers, label: 'Stack Overflow', href: profile.socials.stackoverflow },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // No backend — compose a mail in the visitor's own client.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'your portfolio'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-xl border border-line/50 bg-ink/60 px-4 py-3 text-sm text-snow placeholder:text-fog/50 outline-none transition-all duration-200 focus:border-neon/60 focus:ring-2 focus:ring-neon/20'

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-neon/6 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="contact"
          title="Let's build something intelligent"
          blurb="Have an AI product in mind, a workflow to automate, or a platform to scale? My inbox is open."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                {href ? (
                  <a
                    href={href}
                    className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/35"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-fog">{label}</span>
                      <span className="mt-0.5 block text-sm font-semibold text-snow">{value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="glass flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon/10 text-neon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-fog">{label}</span>
                      <span className="mt-0.5 block text-sm font-semibold text-snow">{value}</span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:text-neon-2"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form onSubmit={submit} className="glass space-y-5 rounded-2xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-snow">
                    Name <span className="text-neon">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-snow">
                    Email <span className="text-neon">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-snow">
                  Project details <span className="text-neon">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you want to automate, build or scale…"
                  className={`${field} resize-none`}
                />
                <p className="mt-2 text-xs text-fog/70">Opens your email client — no data is stored.</p>
              </div>
              <button
                type="submit"
                className="glow-ring group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-neon px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:bg-neon-2 sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
