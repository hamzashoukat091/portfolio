import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, TerminalSquare, Search } from 'lucide-react'
import { EASE } from './Reveal'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          // Hero in view means no section link should look active.
          setActive(e.target.id === 'top' ? '' : e.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px' },
    )
    ;['top', ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-line/30 bg-ink/75 shadow-lg shadow-black/25 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-lg font-bold text-snow"
          aria-label="Back to top"
        >
          <TerminalSquare className="h-5 w-5 text-neon transition-transform duration-300 group-hover:rotate-6" />
          hamza<span className="text-neon">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === id ? 'text-neon' : 'text-fog hover:text-snow'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-neon/10 ring-1 ring-neon/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </a>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => window.dispatchEvent(new Event('cmdk:open'))}
              aria-label="Open command palette"
              className="glass flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-2 text-fog transition-all duration-300 hover:border-neon/40 hover:text-snow"
            >
              <Search className="h-3.5 w-3.5" />
              <kbd className="font-mono text-[10px]">Ctrl K</kbd>
            </button>
          </li>
          <li className="ml-1">
            <a
              href="#contact"
              className="glow-ring rounded-full bg-neon px-5 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:bg-neon-2"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 text-fog hover:text-snow lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-fog transition-colors hover:bg-neon/10 hover:text-neon"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg bg-neon px-4 py-3 text-center text-sm font-semibold text-ink"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
