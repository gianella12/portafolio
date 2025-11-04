
import { useState } from "react"
import { VerImg } from './verImg.jsx'
import { proyectosData } from "./infoProyect.jsx"

export const Proyectos = () => {
  console.log(proyectosData[0].descripcion, 'proyectosData')
  const [activeProject, setActiveProject] = useState(proyectosData[0])
  const [imgSeleccionada, setImg] = useState('')
  const [modo, setModo] = useState('general')

  return (
    <>
      <div className="font-bold font-sans text-2xl text-white">

        <h1 className="m-7 ml-1">Mis proyectos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start ">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 ">
            {proyectosData.map((proyecto) => (
              <div
                key={proyecto.id}
                onClick={() => {
                  setActiveProject(proyecto)
                  setModo("general")
                }}
                className={`relative rounded-3xl  bg-gradient-to-br from-[#171a4a] via-[#2f2c79] to-[#675cb0]
                flex flex-col items-start hover:scale-105 hover:contrast-125 transform-gpu will-change-transform
                transition col-span-1 min-h-[180px] hover:cursor-pointer shadow-lg`}
              >
                <span className="absolute bottom-5 left-0 font-bold text-xl p-3 ">
                  {proyecto.nombre}
                </span>
                <span className="absolute top-2 left-2 text-md p-1 flex flex-wrap gap-1">
                  {proyecto.tecnologias.map((tec, i) =>
                    typeof tec === "string" ? (
                      <span key={i}>{tec}</span>
                    ) : (
                      <span key={i}>{tec}</span>
                    )
                  )}
                </span>
                <button className="absolute bottom-2 right-2 px-3 py-1 mt-2 text-xs font-medium text-white bg-[#2f2c79] rounded-lg hover:bg-[#2f2c80] transition-all"
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

          <div className="bg-white p-6 rounded-xl">
            {modo === "general" ? (
              <>
                <h2 className="text-2xl font-bold text-gray-500 mb-2">{activeProject.nombre}</h2>
                <p className="text-gray-700 text-base mb-3">{activeProject.descripcion}</p>
                <div className="flex gap-4 overflow-x-auto">
                  {activeProject.imagenesWebp.map((webpImg, i) => (
                    <picture key={i} className="flex-shrink-0 hover:cursor-pointer">
                      <source srcSet={webpImg} type="image/webp" />
                      <source srcSet={activeProject.imagenesJpeg[i]} type="image/jpeg" />
                      <img
                        src={activeProject.imagenesJpeg[i]}
                        alt={`Imagen ${i + 1}`}
                        className="block w-auto h-[250px]" 
                        onClick={() => setImg(activeProject.imagenesJpeg[i])}
                      />
                    </picture>
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
                <h2 className="text-xl font-bold text-gray-500 mb-2">
                  {activeProject.nombre} - Descripción técnica
                </h2>
                <p className="text-gray-700 text-base">
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
