import { Heart, TerminalSquare } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line/40 bg-ink-2/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold text-snow">
          <TerminalSquare className="h-5 w-5 text-neon" />
          hamza<span className="text-neon">.dev</span>
        </a>
        <p className="text-sm text-fog">
          © {new Date().getFullYear()} {profile.name}. Crafted with{' '}
          <Heart className="inline h-3.5 w-3.5 fill-neon text-neon" /> React &amp; too much coffee.
        </p>
        <p className="font-mono text-xs text-fog/70">{profile.tagline}</p>
      </div>
    </footer>
  )
}
