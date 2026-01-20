import { VerImg } from '../verImg.jsx'
import { iconosTecnologias } from './../iconosTecnologias.js'
export default function CardProyecto({ modo, activeProject, setImg, imgSeleccionada }) {
  return (
    <>
      <div
        className="
        bg-white
        p-4 sm:p-6
        rounded-xl
        w-full sm:w-[640px]
        max-h-[80vh] sm:h-[620px]
        overflow-hidden
      "
      >
        {modo === "general" ? (
          <div className="h-full  pr-1 sm:pr-2">

            <h2 className="text-lg sm:text-2xl font-bold text-gray-500 mb-2">
              {activeProject.nombre}
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-3">
              {activeProject.descripcion}
            </p>

            <div className="mt-4 mb-3 flex flex-wrap items-center gap-2 opacity-80">
              <p className="text-gray-500 text-sm sm:text-base mr-2">
                Tecnologías:
              </p>
              {activeProject.tecnologias.map((tech) => {
                const { icono: Icono, hover } = iconosTecnologias[tech]

                return (
                  <Icono
                    key={tech}
                    className={`text-2xl text-black/80 transition ${hover}`}
                  />
                )
              })}
            </div>

            <div className="flex gap-3 overflow-x-auto overflow-y-hidden pb-2 mb-2 w-full h-[260px] items-center">
              {activeProject.imagenesWebp.map((webpImg, i) => (
                <picture
                  key={i}
                  className="flex-shrink-0 hover:cursor-pointer"
                >
                  <source srcSet={webpImg} type="image/webp" />
                  <source
                    srcSet={activeProject.imagenesJpeg[i]}
                    type="image/jpeg"
                  />
                  <img
                    src={activeProject.imagenesJpeg[i]}
                    alt={`Imagen ${i + 1}`}
                    className="
          h-full
          max-h-[250px]
          object-contain
          rounded-lg
        "
                  // onClick={() =>
                  //   setImg(activeProject.imagenesJpeg[i])
                  // }
                  />
                </picture>
              ))}
            </div>


            {/* {imgSeleccionada && (
              <VerImg
                img={imgSeleccionada}
                onClose={() => setImg('')}
              />
            )} */}
          </div>
        ) : (
          <>
            <h2 className="text-lg sm:text-xl font-bold text-gray-500 mb-2">
              {activeProject.nombre} · Descripción técnica
            </h2>

            <p className="text-gray-700 text-sm sm:text-base">
              {activeProject.descpcionTecnica}
            </p>
          </>
        )}
      </div>
    </>
  )
}