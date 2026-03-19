import { motion } from "framer-motion"

const datos = [
  { label: "Ubicación",      valor: "Argentina"         },
  { label: "Disponibilidad", valor: "Inmediata"         },
  { label: "Modalidad",      valor: "Remoto / Híbrido"  },
  { label: "Seniority",      valor: "Junior"            },
]

export function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mt-24 sm:mt-32 px-4"
    >
      <div className="flex justify-center mb-6">
        <h2 className="text-white text-xl sm:text-2xl font-medium">Sobre mí</h2>
      </div>

      <div className="max-w-[640px] mx-auto flex flex-col gap-5">

        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Soy desarrolladora Full Stack con enfoque en el ecosistema JavaScript y TypeScript.
          Construyo aplicaciones web completas — desde interfaces React cuidadas hasta APIs REST
          con Node.js — priorizando código limpio, ordenado y fácil de mantener.
        </p>

        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Tengo experiencia con autenticación segura (JWT, OAuth 2.0), integración de APIs
          externas, bases de datos relacionales y herramientas como Docker y Drizzle ORM.
          En mi último proyecto integré la API de Spotify con modelos de IA generativa para
          crear perfiles musicales personalizados. Me motiva resolver problemas reales y
          seguir creciendo dentro de un equipo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {datos.map(({ label, valor }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/8 rounded-xl p-3 text-center"
            >
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{label}</p>
              <p className="text-white/75 text-sm font-medium">{valor}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}
