import { VerImg } from '../verImg.jsx'
export default function CardProyecto({ modo, activeProject, setImg, imgSeleccionada }) {
  return (
    <>
      <div className="bg-white p-6 rounded-xl w-[640px] h-[620px] overflow-hidden">
        {modo === "general" ? (
          <>
            <div className='h-full overflow-y-auto pr-2'>
              <h2 className="text-2xl font-bold text-gray-500 mb-2">{activeProject.nombre}</h2>
              <p className="text-gray-700 text-base mb-3">{activeProject.descripcion}</p>

              <div className="mt-5 mb-2 flex items-center gap-3 opacity-70">
                <p className='text-gray-500 text-base'>Tecnologias utilizadas</p>
                {activeProject.tecnologias.map((tec, i) => (
                  <span
                    key={i}
                    className=" text-black px-2 py-1 rounded text-md shadow w-8"
                  >
                    {tec}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 overflow-x-auto ">
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
                <div>
                  {imgSeleccionada &&
                    <VerImg img={imgSeleccionada} onClose={() => setImg('')} />
                  }
                </div>
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
    </>
  )
}