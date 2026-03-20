import { motion } from "framer-motion"
import fotoPerfilJpeg from "../assets/imagen.jpeg"
import imagenWebp from "../assets/imagen.webp"
import { FaDownload, FaChevronDown } from "react-icons/fa"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export function Bio() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 w-full">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* ── Foto ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex-shrink-0 animate-float"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-indigo-400 via-violet-400 to-emerald-400 opacity-40 blur-sm" />
              <picture className="relative block">
                <source srcSet={imagenWebp} type="image/webp" />
                <source srcSet={fotoPerfilJpeg} type="image/jpeg" />
                <img
                  src={fotoPerfilJpeg}
                  alt="Gianella Lastra"
                  className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover img-ring"
                />
              </picture>
            </div>
          </motion.div>

          {/* ── Contenido ────────────────────────── */}
          <div className="flex flex-col gap-4 text-center md:text-left">

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm text-indigo-400 font-medium tracking-widest uppercase"
            >
              Hola, soy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              <span className="text-gradient">Gianella</span>
              <br />
              <span className="text-white/90">Lastra</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg text-white/40 font-light tracking-wide"
            >
              Desarrolladora Full Stack Junior
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm sm:text-base text-white/55 leading-relaxed max-w-md"
            >
              Construyo aplicaciones web completas con React y Node.js.
              Me enfoco en código limpio, experiencias fluidas y buenas prácticas.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1"
            >
              <a
                href="#proyectos"
                className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(129,140,248,.3)] hover:shadow-[0_0_32px_rgba(129,140,248,.45)]"
              >
                Ver proyectos
              </a>
              <a
                href="/gianella_lastra_cv.pdf"
                download="gianella_lastra_cv.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
              >
                <FaDownload size={11} />
                Descargar CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center justify-center md:justify-start gap-4 mt-1"
            >
              <a href="mailto:gianellalastra4@gmail.com" className="text-white/25 hover:text-indigo-400 transition-colors duration-200" aria-label="Email">
                <SiGmail size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gianella-carla-lastra/" target="_blank" rel="noreferrer" className="text-white/25 hover:text-indigo-400 transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/gianella12" target="_blank" rel="noreferrer" className="text-white/25 hover:text-indigo-400 transition-colors duration-200" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/18"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <FaChevronDown size={10} className="animate-bounce" />
        </motion.div>

      </div>
    </section>
  )
}
