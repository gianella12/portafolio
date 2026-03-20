import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa"
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiTailwindcss, SiExpress, SiMysql, SiPostgresql,
  SiVite, SiNextdotjs, SiDocker, SiDrizzle, SiGooglegemini,
} from "react-icons/si"

const categorias = [
  {
    label: "Frontend",
    techs: [
      { Icono: SiHtml5,       nombre: "HTML5",      color: "group-hover:text-orange-400" },
      { Icono: SiCss3,        nombre: "CSS3",       color: "group-hover:text-blue-400"   },
      { Icono: SiJavascript,  nombre: "JavaScript", color: "group-hover:text-yellow-400" },
      { Icono: SiTypescript,  nombre: "TypeScript", color: "group-hover:text-blue-500"   },
      { Icono: FaReact,       nombre: "React",      color: "group-hover:text-cyan-400"   },
      { Icono: SiNextdotjs,   nombre: "Next.js",    color: "group-hover:text-white"      },
      { Icono: SiTailwindcss, nombre: "Tailwind",   color: "group-hover:text-cyan-400"   },
      { Icono: SiVite,        nombre: "Vite",       color: "group-hover:text-violet-400" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { Icono: FaNodeJs,  nombre: "Node.js",  color: "group-hover:text-green-400" },
      { Icono: SiExpress, nombre: "Express",  color: "group-hover:text-white"     },
    ],
  },
  {
    label: "Base de datos",
    techs: [
      { Icono: SiMysql,      nombre: "MySQL",      color: "group-hover:text-blue-400"   },
      { Icono: SiPostgresql, nombre: "PostgreSQL",  color: "group-hover:text-indigo-400" },
      { Icono: SiDrizzle,    nombre: "Drizzle",    color: "group-hover:text-green-400"  },
    ],
  },
  {
    label: "Herramientas",
    techs: [
      { Icono: SiDocker,        nombre: "Docker", color: "group-hover:text-sky-400"   },
      { Icono: SiGooglegemini,  nombre: "Gemini", color: "group-hover:text-blue-300"  },
      { Icono: FaGit,           nombre: "Git",    color: "group-hover:text-orange-400" },
      { Icono: FaGithub,        nombre: "GitHub", color: "group-hover:text-white"     },
    ],
  },
]

export function Stack() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-12"
        >
          <span className="accent-line" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90">Stack tecnológico</h2>
        </motion.div>

        {/* Categorías */}
        <div className="flex flex-col gap-10">
          {categorias.map(({ label, techs }, ci) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
            >
              <p className="text-[11px] text-white/30 uppercase tracking-[0.18em] mb-4 font-medium">
                {label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techs.map(({ Icono, nombre, color }) => (
                  <div
                    key={nombre}
                    className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/3 hover:bg-white/6 border border-white/7 hover:border-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    <Icono className={`text-lg text-white/35 transition-colors duration-200 ${color}`} />
                    <span className={`text-xs text-white/40 transition-colors duration-200 ${color}`}>
                      {nombre}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// Backward compat alias
export { Stack as AcordeonStack }
