import { useState } from "react"
import { motion } from "framer-motion"
import { proyectosData } from "./infoProyect.jsx"
import Carrusel from "./carrusel.jsx"

export const Proyectos = () => {
  const [modo, setModo] = useState("general")
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Título + controles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"
        >
          <div className="flex flex-col gap-3">
            <span className="accent-line" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white/90">Proyectos</h2>
          </div>

          {/* Toggle vista */}
          <div className="flex items-center self-start sm:self-auto gap-1 p-1 bg-white/4 border border-white/8 rounded-xl">
            <button
              onClick={() => !lightboxOpen && setModo("general")}
              disabled={lightboxOpen}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                modo === "general"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/25"
                  : "text-white/35 hover:text-white/60"
              } ${lightboxOpen ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
            >
              General
            </button>
            <button
              onClick={() => !lightboxOpen && setModo("tecnica")}
              disabled={lightboxOpen}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                modo === "tecnica"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/25"
                  : "text-white/35 hover:text-white/60"
              } ${lightboxOpen ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Técnico
            </button>
          </div>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-6"
        >
          <Carrusel
            modo={modo}
            proyectosData={proyectosData}
            lightboxOpen={lightboxOpen}
            onLightboxChange={setLightboxOpen}
          />
        </motion.div>

      </div>
    </section>
  )
}
