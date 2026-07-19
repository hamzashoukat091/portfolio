import Navbar from './components/Navbar'
import CommandPalette from './components/CommandPalette'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-neon focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
