import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardProyecto from "./Proyectos/CardProyecto.jsx";
import "swiper/css";
import "swiper/css/navigation";

export default function Carrusel({ modo, proyectosData = [], lightboxOpen, onLightboxChange }) {
  const swiperRef = useRef(null)

  const isLocked = lightboxOpen || modo === "tecnica"

  useEffect(() => {
    if (!swiperRef.current) return
    swiperRef.current.allowSlideNext = !isLocked
    swiperRef.current.allowSlidePrev = !isLocked
  }, [isLocked])

  return (
    <div className={`relative transition-opacity duration-200 ${isLocked ? "[&_.swiper-button-prev]:opacity-20 [&_.swiper-button-next]:opacity-20 [&_.swiper-button-prev]:pointer-events-none [&_.swiper-button-next]:pointer-events-none" : ""}`}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
      >
        {proyectosData.map((proyecto) => (
          <SwiperSlide key={proyecto.id}>
            <div className="flex flex-col items-center gap-4">
              <CardProyecto
                modo={modo}
                activeProject={proyecto}
                onLightboxChange={onLightboxChange}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
