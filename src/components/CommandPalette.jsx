import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Search, User, Cpu, FolderKanban, Briefcase, TerminalSquare, Mail,
  Copy, Check, Download, CornerDownLeft,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { EASE } from './Reveal'
import { profile } from '../data/profile'

// Global command palette. Opens with Ctrl/Cmd+K or a `cmdk:open` window event.
export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [copied, setCopied] = useState(false)
  const listRef = useRef(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setSelected(0)
    setCopied(false)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === 'Escape') {
        close()
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('cmdk:open', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('cmdk:open', onOpen)
    }
  }, [close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = useCallback(
    (id) => {
      close()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    [close],
  )

  const openUrl = useCallback(
    (url) => {
      close()
      window.open(url, '_blank', 'noopener,noreferrer')
    },
    [close],
  )

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(close, 900)
    } catch {
      close()
      window.location.href = `mailto:${profile.email}`
    }
  }, [close])

  const commands = useMemo(
    () => [
      { group: 'Navigate', label: 'About', hint: 'Who I am', icon: User, run: () => goTo('about') },
      { group: 'Navigate', label: 'Skills', hint: 'Stack & tooling', icon: Cpu, run: () => goTo('skills') },
      { group: 'Navigate', label: 'Projects', hint: 'Shipped work', icon: FolderKanban, run: () => goTo('projects') },
      { group: 'Navigate', label: 'Experience', hint: 'Career timeline', icon: Briefcase, run: () => goTo('experience') },
      { group: 'Navigate', label: 'Terminal', hint: 'Interactive shell', icon: TerminalSquare, run: () => goTo('terminal') },
      { group: 'Navigate', label: 'Contact', hint: 'Start a project', icon: Mail, run: () => goTo('contact') },
      {
        group: 'Actions',
        label: copied ? 'Email copied!' : 'Copy email address',
        hint: profile.email,
        icon: copied ? Check : Copy,
        run: copyEmail,
      },
      { group: 'Actions', label: 'Download resume', hint: 'PDF', icon: Download, run: () => openUrl(profile.resumeUrl) },
      { group: 'Social', label: 'GitHub', hint: 'hamzashoukat091', icon: GithubIcon, run: () => openUrl(profile.socials.github) },
      { group: 'Social', label: 'LinkedIn', hint: 'hamzashoukat091', icon: LinkedinIcon, run: () => openUrl(profile.socials.linkedin) },
    ],
    [copied, goTo, openUrl, copyEmail],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint}`.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${selected}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  const onInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((v) => (v + 1) % Math.max(filtered.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((v) => (v - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[selected]?.run()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink/70 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.24, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-neon/15"
          >
            <div className="flex items-center gap-3 border-b border-line/40 px-4">
              <Search className="h-4 w-4 shrink-0 text-neon" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Type a command or search…"
                aria-label="Search commands"
                className="h-13 w-full bg-transparent py-4 text-sm text-snow placeholder:text-fog/70 focus:outline-none"
              />
              <kbd className="rounded-md border border-line/60 px-1.5 py-0.5 font-mono text-[10px] text-fog">esc</kbd>
            </div>

            <div ref={listRef} role="listbox" aria-label="Commands" className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center font-mono text-sm text-fog">
                  No results for “{query}”
                </p>
              )}
              {filtered.map((cmd, i) => {
                const CmdIcon = cmd.icon
                const showGroup = i === 0 || filtered[i - 1].group !== cmd.group
                return (
                  <div key={`${cmd.group}-${cmd.label}`}>
                    {showGroup && (
                      <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-fog/70">
                        {cmd.group}
                      </p>
                    )}
                    <button
                      data-index={i}
                      role="option"
                      aria-selected={i === selected}
                      onClick={cmd.run}
                      onMouseEnter={() => setSelected(i)}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 ${
                        i === selected ? 'bg-neon/10 text-snow ring-1 ring-inset ring-neon/30' : 'text-fog'
                      }`}
                    >
                      <CmdIcon className={`h-4 w-4 shrink-0 ${i === selected ? 'text-neon' : 'text-fog'}`} />
                      <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                      <span className="max-w-[45%] truncate font-mono text-[11px] text-fog/70">{cmd.hint}</span>
                      {i === selected && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-neon/70" />}
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-line/40 px-4 py-2.5 font-mono text-[10px] text-fog/70">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line/60 px-1 py-0.5">↑</kbd>
                <kbd className="rounded border border-line/60 px-1 py-0.5">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line/60 px-1 py-0.5">↵</kbd>
                select
              </span>
              <span className="ml-auto text-neon/60">hamza.dev</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
