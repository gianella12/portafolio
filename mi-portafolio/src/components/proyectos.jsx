
import { useState } from "react"
import { proyectosData } from "./infoProyect.jsx"
import Carrusel from "./carrusel.jsx"

export const Proyectos = () => {
  const [imgSeleccionada, setImg] = useState('')
  const [modo, setModo] = useState('general')

  return (
    <>
       <div className="mt-24 sm:mt-40 font-sans px-4">
      <div className="flex justify-center mb-4 sm:mb-6">
        <h2 className="text-white text-xl sm:text-2xl font-medium">
          Proyectos
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[720px]">
          <div className="flex justify-center sm:justify-end mb-3 sm:mb-4">
            <button
              onClick={() => setModo(modo === "general" ? "tecnica" : "general")}
              className="
                text-sm
                text-white/70
                hover:text-white
                transition
              "
            >
              {modo === "general"
                ? "Ver descripción técnica"
                : "Ver descripción general"}
            </button>
          </div>

          <Carrusel
            modo={modo}
            setImg={setImg}
            imgSeleccionada={imgSeleccionada}
            proyectosData={proyectosData}
          />
        </div>
      </div>
    </div>
    </>
  )
}
