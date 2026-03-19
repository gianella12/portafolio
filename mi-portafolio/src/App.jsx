import './app.css'
import { Bio } from "./components/bio"
import { SobreMi } from "./components/sobreMi"
import { Proyectos } from './components/proyectos'
import { AcordeonStack } from './components/acordeonStack'
import { SiGmail } from "react-icons/si"
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"

function App() {
  return (
    <div className="min-h-screen fondo-vivo text-white">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center gap-3 px-5 sm:px-8 py-4 backdrop-blur-md border-b border-white/5">
        <a
          href="mailto:gianellalastra4@gmail.com"
          className="text-white/50 hover:text-white transition-colors duration-200"
          aria-label="Email"
        >
          <SiGmail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/gianella-carla-lastra/"
          target="_blank" rel="noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/gianella12"
          target="_blank" rel="noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="/gianella_lastra_cv.pdf"
          download="gianella_lastra_cv.pdf"
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white px-3 py-1.5 text-xs rounded-lg transition-all duration-200"
        >
          <FaDownload size={11} />
          <span>CV</span>
        </a>
      </header>

      {/* Contenido */}
      <main className="pt-20 pb-32">

        {/* Hero */}
        <Bio />

        {/* Sobre mí */}
        <SobreMi />

        {/* Stack */}
        <div className="mt-24 sm:mt-32 flex flex-col items-center gap-4 px-4">
          <h2 className="text-white text-xl sm:text-2xl font-medium">Stack</h2>
          <AcordeonStack />
        </div>

        {/* Proyectos */}
        <Proyectos />

      </main>

      {/* Footer */}
      <footer className="text-center pb-8">
        <p className="text-white/20 text-xs">
          Gianella Lastra · {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  )
}

export default App
