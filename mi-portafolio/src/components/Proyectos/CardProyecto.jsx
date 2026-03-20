import { useState } from 'react'
import { iconosTecnologias } from './../iconosTecnologias.js'

const VISIBLE = 2

export default function CardProyecto({ modo, activeProject, onLightboxChange }) {
  const [imgIndex, setImgIndex] = useState(null)
  const [galleryStart, setGalleryStart] = useState(0)

  const total = activeProject.imagenesJpeg.length
  const canPrev = galleryStart > 0
  const canNext = galleryStart + VISIBLE < total

  const openImg = (i) => { setImgIndex(i); onLightboxChange(true) }
  const closeImg = () => { setImgIndex(null); onLightboxChange(false) }
  const handlePrev = (e) => { e.stopPropagation(); setImgIndex(i => (i - 1 + total) % total) }
  const handleNext = (e) => { e.stopPropagation(); setImgIndex(i => (i + 1) % total) }

  return (
    <>
      {/* ── Card ───────────────────────────────────── */}
      <div className="
        relative
        bg-white/[0.03] backdrop-blur-md
        border border-white/8
        rounded-2xl
        overflow-hidden
        w-full sm:w-[680px]
        min-h-[520px] sm:h-[600px]
        shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        flex flex-col
      ">
        {/* Accent top border */}
        <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/60 via-violet-500/40 to-transparent flex-shrink-0" />

        <div className="flex-1 min-h-0 p-5 sm:p-7 flex flex-col">

          {modo === "general" ? (
            <div className="h-full flex flex-col gap-4">

              {/* Nombre */}
              <h2 className="text-xl sm:text-2xl font-bold text-white/90 tracking-tight">
                {activeProject.nombre}
              </h2>

              {/* Descripción */}
              <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                {activeProject.descripcion}
              </p>

              {/* Stack chips */}
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/7">
                {activeProject.tecnologias.map((tech) => {
                  const entry = iconosTecnologias[tech]
                  if (!entry) return null
                  const { icono: Icono, hover } = entry
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 hover:border-white/18 transition-all duration-150 group"
                    >
                      <Icono className={`text-base text-white/35 transition-colors duration-150 ${hover}`} />
                      <span className="text-[11px] text-white/35 capitalize">{tech}</span>
                    </div>
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
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border text-white text-base transition-all duration-200 ${
                      canPrev
                        ? 'border-white/20 bg-white/6 hover:bg-white/14 cursor-pointer'
                        : 'border-white/5 text-white/15 cursor-default'
                    }`}
                    aria-label="Fotos anteriores"
                  >‹</button>

                  {/* Imágenes */}
                  <div className="flex gap-3 flex-1 min-h-0 items-center justify-center">
                    {activeProject.imagenesWebp
                      .slice(galleryStart, galleryStart + VISIBLE)
                      .map((webpImg, idx) => {
                        const i = galleryStart + idx
                        return (
                          <picture
                            key={i}
                            className="flex-1 min-w-0 cursor-zoom-in group"
                            onClick={() => openImg(i)}
                          >
                            <source srcSet={webpImg} type="image/webp" />
                            <source srcSet={activeProject.imagenesJpeg[i]} type="image/jpeg" />
                            <img
                              src={activeProject.imagenesJpeg[i]}
                              alt={`${activeProject.nombre} – imagen ${i + 1}`}
                              className="w-full h-[180px] sm:h-[220px] object-contain rounded-xl border border-white/8 group-hover:border-indigo-500/30 group-hover:brightness-110 transition-all duration-200"
                            />
                          </picture>
                        )
                      })}
                  </div>

                  {/* Flecha derecha */}
                  <button
                    onClick={() => setGalleryStart(s => s + 1)}
                    disabled={!canNext}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border text-white text-base transition-all duration-200 ${
                      canNext
                        ? 'border-white/20 bg-white/6 hover:bg-white/14 cursor-pointer'
                        : 'border-white/5 text-white/15 cursor-default'
                    }`}
                    aria-label="Más fotos"
                  >›</button>
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
                            className={`rounded-full transition-all duration-300 ${
                              isVisible ? 'w-3.5 h-1.5 bg-indigo-400/70' : 'w-1.5 h-1.5 bg-white/18 hover:bg-white/35'
                            }`}
                            aria-label={`Ir a imagen ${i + 1}`}
                          />
                        )
                      })}
                    </div>
                  )}
                  <span className="text-white/30 text-xs">Clic para ampliar</span>
                </div>
              </div>

            </div>
          ) : (
            /* Vista técnica */
            <div className="h-full overflow-y-auto pr-1 flex flex-col gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white/90">
                  {activeProject.nombre}
                </h2>
                <span className="text-xs text-indigo-400/70 font-medium uppercase tracking-widest">
                  Descripción técnica
                </span>
              </div>
              <div className="h-px bg-white/7" />
              <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                {activeProject.descpcionTecnica}
              </p>
            </div>
          )}

        </div>
      </div>

      {/* ── Lightbox ───────────────────────────────── */}
      {imgIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={closeImg}
        >
          {/* Cerrar */}
          <button
            onClick={closeImg}
            className="fixed top-4 right-4 w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/15 hover:border-white/35 text-white flex items-center justify-center transition-all duration-200 z-10"
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
                className="absolute left-[-52px] w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 border border-white/15 hover:border-white/35 text-white text-xl flex items-center justify-center transition-all duration-200"
                aria-label="Imagen anterior"
              >‹</button>
            )}

            <picture>
              <source srcSet={activeProject.imagenesWebp[imgIndex]} type="image/webp" />
              <source srcSet={activeProject.imagenesJpeg[imgIndex]} type="image/jpeg" />
              <img
                src={activeProject.imagenesJpeg[imgIndex]}
                alt={`${activeProject.nombre} – imagen ${imgIndex + 1}`}
                className="max-h-[86vh] max-w-[84vw] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </picture>

            {total > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-[-52px] w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 border border-white/15 hover:border-white/35 text-white text-xl flex items-center justify-center transition-all duration-200"
                aria-label="Imagen siguiente"
              >›</button>
            )}

            {total > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {activeProject.imagenesJpeg.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === imgIndex ? 'w-4 h-1.5 bg-indigo-400' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
                    }`}
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
