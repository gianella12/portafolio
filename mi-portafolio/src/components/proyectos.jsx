
import { useState } from "react"
import { VerImg } from './verImg.jsx'
import { proyectosData } from "./infoProyect.jsx"

export const Proyectos = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [imgSeleccionada, setImg] = useState('')
  const [modo, setModo] = useState(null)

  return (
    <>
      <div className="font-bold font-sans text-2xl text-white">

        <h1 className="m-7 ml-1">Mis proyectos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 ">
            {proyectosData.map((proyecto) => (
              <div
                key={proyecto.id}
                onClick={() => {
                  setActiveProject(proyecto)
                  setModo("general")
                }}
                className={`relative rounded-3xl  bg-gradient-to-br from-gray-600 via-gray-700 to-gray-400
                flex flex-col items-start hover:scale-105 hover:contrast-125 transform-gpu will-change-transform
                transition col-span-1 min-h-[180px] `}
              >
                <span className="absolute bottom-5 left-0 font-bold text-xl p-3 ">
                  {proyecto.nombre}
                </span>
                <span className="absolute top-2 left-2 text-md p-1 flex flex-wrap gap-1">
                  {proyecto.tecnologias.map((tec, i) =>
                    typeof tec === "string" ? (
                      <span  key={i}>{tec}</span>
                    ) : (
                      <span  key={i}>{tec}</span>
                    )
                  )}
                </span>
                <button className="absolute bottom-2 right-2 px-3 py-1 mt-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveProject(proyecto)
                    setModo('tecnica')
                  }}>
                  Descripción técnica
                </button>

              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl  h-[380px] overflow-auto">
            {!activeProject ? (
              <p className="text-gray-400">
                Haz click en un proyecto para ver detalles
              </p>
             
            ) : modo === "general" ?  (
               <>
                <h2 className="text-2xl font-bold text-gray-500 mb-2">{activeProject.nombre}</h2>
                <p className="text-gray-700 text-xl mb-3">{activeProject.descripcion}</p>
                <div className="flex gap-4 overflow-x-auto">
                  {activeProject.imagenes.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="h-32 rounded border border-b-black"
                      onClick={() => setImg(img)}
                    />
                  ))}
                  <div className="">
                    {imgSeleccionada &&
                      <VerImg img={imgSeleccionada} onClose={() => setImg('')} />
                    }
                  </div>
                </div>
              </>
            ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-500 mb-2">
                {activeProject.nombre} - Descripción técnica
              </h2>
              <p className="text-gray-700 text-xl">
               {activeProject.descpcionTecnica}
              </p>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  )
}
