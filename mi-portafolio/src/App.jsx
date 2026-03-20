import './app.css'
import { Bio } from "./components/bio"
import { SobreMi } from "./components/sobreMi"
import { Proyectos } from './components/proyectos'
import { Stack } from './components/acordeonStack'
import { Contacto } from './components/contacto'
import { SiGmail } from "react-icons/si"
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"

const navLinks = [
  { href: "#inicio",    label: "Inicio" },
  { href: "#sobre-mi",  label: "Sobre mí" },
  { href: "#stack",     label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto",  label: "Contacto" },
]

function App() {
  return (
    <div className="min-h-screen bg-portfolio text-white">

      {/* ── Navbar ───────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-15 flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-sm font-bold tracking-tight select-none">
              GL
            </span>
          </a>

          {/* Nav links – desktop */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-white/40 hover:text-white/85 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3.5">
            <a href="mailto:gianellalastra4@gmail.com" className="text-white/35 hover:text-white/70 transition-colors" aria-label="Email">
              <SiGmail size={16} />
            </a>
            <a href="https://www.linkedin.com/in/gianella-carla-lastra/" target="_blank" rel="noreferrer" className="text-white/35 hover:text-white/70 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a href="https://github.com/gianella12" target="_blank" rel="noreferrer" className="text-white/35 hover:text-white/70 transition-colors" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a
              href="/gianella_lastra_cv.pdf"
              download="gianella_lastra_cv.pdf"
              className="flex items-center gap-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/25 hover:border-indigo-500/45 text-indigo-300 hover:text-indigo-200 px-3 py-1.5 text-xs rounded-lg transition-all duration-200 font-medium"
            >
              <FaDownload size={10} />
              <span>CV</span>
            </a>
          </div>
        </nav>
      </header>

      {/* ── Sections ─────────────────────────────── */}
      <main>
        <div id="inicio">
          <Bio />
        </div>
        <div id="sobre-mi">
          <SobreMi />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div id="proyectos">
          <Proyectos />
        </div>
        <div id="contacto">
          <Contacto />
        </div>
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} Gianella Lastra
        </p>
      </footer>

    </div>
  )
}

export default App
