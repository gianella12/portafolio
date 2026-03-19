import { useState } from 'react'
import { iconosTecnologias } from './../iconosTecnologias.js'

const VISIBLE = 2

export default function CardProyecto({ modo, activeProject, onLightboxChange }) {
  const [imgIndex, setImgIndex] = useState(null)
  const [galleryStart, setGalleryStart] = useState(0)

  const total = activeProject.imagenesJpeg.length
  const canPrev = galleryStart > 0
  const canNext = galleryStart + VISIBLE < total

  const openImg = (i) => {
    setImgIndex(i)
    onLightboxChange(true)
  }

  const closeImg = () => {
    setImgIndex(null)
    onLightboxChange(false)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setImgIndex(i => (i - 1 + total) % total)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setImgIndex(i => (i + 1) % total)
  }

  return (
    <>
      <div className="
        bg-white/5 backdrop-blur-md
        border border-white/10
        p-5 sm:p-7
        rounded-2xl
        w-full sm:w-[640px]
        max-h-[80vh] sm:h-[620px]
        overflow-hidden
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
      ">
        {modo === "general" ? (
          <div className="h-full flex flex-col">

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              {activeProject.nombre}
            </h2>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 line-clamp-4">
              {activeProject.descripcion}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <span className="text-white/30 text-xs uppercase tracking-widest">Stack</span>
              {activeProject.tecnologias.map((tech) => {
                const entry = iconosTecnologias[tech]
                if (!entry) return null
                const { icono: Icono, hover } = entry
                return (
                  <Icono
                    key={tech}
                    className={`text-2xl text-white/40 transition-colors duration-200 ${hover}`}
                  />
                )
              })}
            </div>

            {/* Galería */}
            <div className="flex-1 min-h-0 flex flex-col gap-3">
              <div className="flex items-center gap-2 flex-1 min-h-0">

                {/* Flecha izquierda */}
                <button
                  onClick={() => setGalleryStart(s => s - 1)}
                  disabled={!canPrev}
                  className={`
                    flex-shrink-0 w-7 h-7 rounded-full
                    flex items-center justify-center
                    border text-white text-base
                    transition-all duration-200
                    ${canPrev
                      ? 'border-white/20 bg-white/8 hover:bg-white/15 cursor-pointer'
                      : 'border-white/5 text-white/15 cursor-default'
                    }
                  `}
                  aria-label="Fotos anteriores"
                >
                  ‹
                </button>

                {/* Imágenes visibles */}
                <div className="flex gap-3 flex-1 min-h-0 items-center justify-center">
                  {activeProject.imagenesWebp
                    .slice(galleryStart, galleryStart + VISIBLE)
                    .map((webpImg, idx) => {
                      const i = galleryStart + idx
                      return (
                        <picture
                          key={i}
                          className="flex-1 min-w-0 cursor-pointer group"
                          onClick={() => openImg(i)}
                        >
                          <source srcSet={webpImg} type="image/webp" />
                          <source srcSet={activeProject.imagenesJpeg[i]} type="image/jpeg" />
                          <img
                            src={activeProject.imagenesJpeg[i]}
                            alt={`Imagen ${i + 1}`}
                            className="
                              w-full h-[190px] sm:h-[220px]
                              object-contain
                              rounded-xl
                              border border-white/10
                              group-hover:border-white/30
                              group-hover:brightness-110
                              group-hover:shadow-lg
                              transition-all duration-200
                            "
                          />
                        </picture>
                      )
                    })}
                </div>

                {/* Flecha derecha */}
                <button
                  onClick={() => setGalleryStart(s => s + 1)}
                  disabled={!canNext}
                  className={`
                    flex-shrink-0 w-7 h-7 rounded-full
                    flex items-center justify-center
                    border text-white text-base
                    transition-all duration-200
                    ${canNext
                      ? 'border-white/20 bg-white/8 hover:bg-white/15 cursor-pointer'
                      : 'border-white/5 text-white/15 cursor-default'
                    }
                  `}
                  aria-label="Más fotos"
                >
                  ›
                </button>
              </div>

              {/* Dots + hint */}
              <div className="flex items-center justify-center gap-3">
                {total > 1 && (
                  <div className="flex items-center gap-1.5">
                    {activeProject.imagenesJpeg.map((_, i) => {
                      const isVisible = i >= galleryStart && i < galleryStart + VISIBLE
                      return (
                        <button
                          key={i}
                          onClick={() => setGalleryStart(Math.min(i, total - VISIBLE))}
                          className={`
                            rounded-full transition-all duration-300
                            ${isVisible ? 'w-3.5 h-1.5 bg-white/70' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}
                          `}
                          aria-label={`Ir a imagen ${i + 1}`}
                        />
                      )
                    })}
                  </div>
                )}
                <span className="text-white/45 text-xs">
                  Clic para ampliar
                </span>
              </div>
            </div>

          </div>
        ) : (
          <div className="h-full overflow-y-auto pr-1">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
              {activeProject.nombre}{' '}
              <span className="text-white/40 font-normal">· Descripción técnica</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {activeProject.descpcionTecnica}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {imgIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={closeImg}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeImg}
            className="
              fixed top-4 right-4
              w-10 h-10 rounded-full
              bg-neutral-900/80 hover:bg-neutral-900
              border border-white/20 hover:border-white/40
              text-white
              flex items-center justify-center
              transition-all duration-200
              shadow-[0_2px_12px_rgba(0,0,0,0.6)] z-10
              backdrop-blur-sm
            "
            aria-label="Cerrar imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="relative flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {total > 1 && (
              <button
                onClick={handlePrev}
                className="
                  absolute left-[-56px]
                  w-10 h-10 rounded-full
                  bg-white/10 hover:bg-white/20
                  border border-white/20 hover:border-white/40
                  text-white text-xl
                  flex items-center justify-center
                  transition-all duration-200 shadow-md
                "
                aria-label="Imagen anterior"
              >
                ‹
              </button>
            )}

            <picture>
              <source srcSet={activeProject.imagenesWebp[imgIndex]} type="image/webp" />
              <source srcSet={activeProject.imagenesJpeg[imgIndex]} type="image/jpeg" />
              <img
                src={activeProject.imagenesJpeg[imgIndex]}
                alt={`Imagen ${imgIndex + 1}`}
                className="max-h-[85vh] max-w-[82vw] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </picture>

            {total > 1 && (
              <button
                onClick={handleNext}
                className="
                  absolute right-[-56px]
                  w-10 h-10 rounded-full
                  bg-white/10 hover:bg-white/20
                  border border-white/20 hover:border-white/40
                  text-white text-xl
                  flex items-center justify-center
                  transition-all duration-200 shadow-md
                "
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            )}

            {total > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {activeProject.imagenesJpeg.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`
                      rounded-full transition-all duration-200
                      ${i === imgIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'}
                    `}
                    aria-label={`Ir a imagen ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
