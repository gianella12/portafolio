import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardProyecto from "./Proyectos/CardProyecto.jsx";
import "swiper/css";
import "swiper/css/navigation";

export default function Carrusel({
  modo,
  setImg,
  imgSeleccionada,
  proyectosData = []
}) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
    >

      {proyectosData.map((proyecto) => (
        <SwiperSlide key={proyecto.id}>
          <div className="flex flex-col items-center gap-4">
          
            <CardProyecto
              modo={modo}
              activeProject={proyecto}
              setImg={setImg}
              imgSeleccionada={imgSeleccionada}
            />
          </div>

        </SwiperSlide>
      ))}

    </Swiper>
  );
}