import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile, skillGroups, projects } from '../data/profile'

const HELP = [
  'Available commands:',
  '  help          show this list',
  '  about         who is hamza?',
  '  skills        list the arsenal',
  '  projects      what has he shipped?',
  '  contact       reach out',
  '  socials       find him online',
  '  stack         current daily drivers',
  '  hire          the important one',
  '  clear         wipe the screen',
  '',
  "Psst — try 'sudo hire hamza' or 'coffee'.",
]

function run(cmdRaw) {
  const cmd = cmdRaw.trim().toLowerCase()
  switch (cmd) {
    case '':
      return []
    case 'help':
      return HELP
    case 'about':
      return [
        `${profile.name} — ${profile.role}`,
        `${profile.location} · ${profile.company}`,
        '',
        '4+ years turning vision into virtual reality.',
        '10K+ users served · 40% costs cut · 0 boring chatbots.',
      ]
    case 'skills':
      return skillGroups.flatMap((g) => [
        `▸ ${g.label}`,
        ...g.skills.map((s) => `    ${s.name.padEnd(34, ' ')} ${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))} ${s.level}%`),
      ])
    case 'projects':
      return projects.map((p) => `▸ ${p.name.padEnd(24, ' ')} [${p.category}]`)
    case 'contact':
      return [`email : ${profile.email}`, `phone : ${profile.phone}`, 'status: available for new projects ✔']
    case 'socials':
      return Object.entries(profile.socials).map(([k, v]) => `${k.padEnd(14, ' ')} ${v}`)
    case 'stack':
      return ['Python · FastAPI · Claude · GPT · LangChain · Pinecone · PostgreSQL · React']
    case 'hire':
    case 'hire hamza':
      return ['Excellent choice. Opening the contact section is step one:', '→ scroll down or run: contact']
    case 'sudo hire hamza':
      return ['[sudo] password for visitor: ********', 'Access granted. Hamza has been notified of your excellent taste. ✔']
    case 'coffee':
      return ['☕ brewing... done.', 'Productivity +40%. Same as his clients\' cost savings. Coincidence?']
    case 'whoami':
      return ['visitor — but hopefully soon: client']
    case 'ls':
      return ['about/  skills/  projects/  experience/  contact/  secrets/']
    case 'cat secrets':
    case 'cd secrets':
    case 'cd secrets/':
      return ['Permission denied. Nice try though — that\'s exactly the curiosity Hamza hires for.']
    case 'rm -rf /':
      return ['Nope. This portfolio is production-grade. Backups exist. Nice try. 😉'.replace('😉', ':)')]
    case 'exit':
      return ['There is no exit. Only the Hire Me button.']
    default:
      return [`command not found: ${cmd}`, "type 'help' for available commands"]
  }
}

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'out', text: 'HamzaOS v4.2.0 — AI engineer shell' },
    { type: 'out', text: "type 'help' to explore, or just start poking around" },
  ])
  const [input, setInput] = useState('')
  const [cmdStack, setCmdStack] = useState([])
  const [stackIdx, setStackIdx] = useState(-1)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [history])

  const submit = (e) => {
    e.preventDefault()
    const cmd = input
    const entry = [{ type: 'in', text: cmd }]
    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([])
    } else {
      setHistory((h) => [...h, ...entry, ...run(cmd).map((text) => ({ type: 'out', text }))])
    }
    if (cmd.trim()) setCmdStack((s) => [cmd, ...s])
    setStackIdx(-1)
    setInput('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(stackIdx + 1, cmdStack.length - 1)
      if (cmdStack[next] !== undefined) {
        setStackIdx(next)
        setInput(cmdStack[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = stackIdx - 1
      setStackIdx(next)
      setInput(next < 0 ? '' : cmdStack[next])
    }
  }

  return (
    <section id="terminal" className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <SectionHeading
        kicker="playground"
        title="Talk to the portfolio"
        blurb="A real, working shell. Type a command — it bites back (politely)."
      />

      <Reveal>
        <div
          className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 border-b border-line/50 bg-ink/70 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-fog">visitor@hamza.dev: ~</span>
          </div>

          <div
            ref={bodyRef}
            className="h-80 cursor-text overflow-y-auto bg-ink/85 p-5 font-mono text-[13px] leading-relaxed"
          >
            {history.map((line, i) =>
              line.type === 'in' ? (
                <p key={i} className="mt-2 text-snow">
                  <span className="text-neon">visitor@hamza.dev</span>
                  <span className="text-fog">:~$ </span>
                  {line.text}
                </p>
              ) : (
                <p key={i} className="whitespace-pre-wrap text-fog">{line.text}</p>
              ),
            )}
            <form onSubmit={submit} className="mt-2 flex items-center">
              <label htmlFor="term-input" className="shrink-0">
                <span className="text-neon">visitor@hamza.dev</span>
                <span className="text-fog">:~$ </span>
              </label>
              <input
                id="term-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="ml-1 w-full bg-transparent text-snow caret-neon outline-none"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
