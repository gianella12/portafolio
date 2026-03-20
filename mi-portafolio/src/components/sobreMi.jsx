import { motion } from "framer-motion"

const datos = [
  { label: "Ubicación",      valor: "Argentina"        },
  { label: "Disponibilidad", valor: "Inmediata"        },
  { label: "Modalidad",      valor: "Remoto / Híbrido" },
  { label: "Seniority",      valor: "Junior"           },
]

export function SobreMi() {
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90">Sobre mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-white/55 text-sm sm:text-base leading-relaxed">
              Soy desarrolladora Full Stack con enfoque en el ecosistema JavaScript y TypeScript.
              Construyo aplicaciones web completas — desde interfaces React cuidadas hasta APIs REST
              con Node.js — priorizando código limpio, ordenado y fácil de mantener.
            </p>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed">
              Tengo experiencia con autenticación segura (JWT, OAuth 2.0), integración de APIs
              externas, bases de datos relacionales y herramientas como Docker y Drizzle ORM.
              En mi último proyecto integré la API de Spotify con modelos de IA generativa para
              crear perfiles musicales personalizados. Me motiva resolver problemas reales y
              seguir creciendo dentro de un equipo.
            </p>

            {/* Badge disponibilidad */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-medium tracking-wide">Disponible para trabajar</span>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {datos.map(({ label, valor }) => (
              <div
                key={label}
                className="bg-white/3 hover:bg-white/5 border border-white/7 hover:border-indigo-500/20 rounded-2xl p-4 transition-all duration-200 group"
              >
                <p className="text-white/28 text-[10px] uppercase tracking-[0.15em] mb-2 group-hover:text-indigo-400/60 transition-colors duration-200">
                  {label}
                </p>
                <p className="text-white/80 text-sm font-semibold">{valor}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
