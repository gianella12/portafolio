
import { useState } from "react"
import { proyectosData } from "./infoProyect.jsx"
import Carrusel from "./carrusel.jsx"

export const Proyectos = () => {
  const [modo, setModo] = useState('general')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <div className="mt-24 sm:mt-40 font-sans px-4">
        <div className="flex justify-center mb-4 sm:mb-6">
          <h2 className="text-white text-xl sm:text-2xl font-medium">
            Proyectos
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[760px]">
            <div className="flex justify-center sm:justify-end mb-3 sm:mb-4">
              <button
                onClick={() => !lightboxOpen && setModo(modo === "general" ? "tecnica" : "general")}
                disabled={lightboxOpen}
                className={`
                  text-xs sm:text-sm
                  px-3 sm:px-4
                  py-1.5 sm:py-2
                  rounded-lg
                  bg-white/5
                  text-white/70
                  transition
                  ${lightboxOpen
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-white hover:bg-white/10 cursor-pointer"
                  }
                `}
              >
                {modo === "general"
                  ? "Ver descripción técnica"
                  : "Ver descripción general"}
              </button>
            </div>

            <Carrusel
              modo={modo}
              proyectosData={proyectosData}
              lightboxOpen={lightboxOpen}
              onLightboxChange={setLightboxOpen}
            />
          </div>
        </div>
      </div>
    </>
  )
}
