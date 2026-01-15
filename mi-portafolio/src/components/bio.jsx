import { motion } from "framer-motion";
import fotoPerfilJpeg from "../assets/imagen.jpeg";
import imagenWebp from "../assets/imagen.webp";

export function Bio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto mt-14 w-[560px] rounded-2xl  p-[1px]"
    >
      <div className="rounded-2xl px-8 py-10 backdrop-blur">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-6"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 blur opacity-70" />
            <picture className="relative block">
              <source srcSet={imagenWebp} type="image/webp" />
              <source srcSet={fotoPerfilJpeg} type="image/jpeg" />
              <img
                src={fotoPerfilJpeg}
                alt="Gianella"
                className="h-40 w-40 rounded-full object-cover"
              />
            </picture>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-xl font-semibold tracking-tight text-white"
          >
            Desarrolladora Full Stack Junior
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm leading-relaxed text-white/80"
          >
            Hola, soy Gianella. Desarrollo interfaces claras y modernas, enfocadas
            en que la experiencia del usuario sea simple, fluida y agradable.
            Me gusta escribir código ordenado y seguir buenas prácticas.
          </motion.p>

          {/* Línea decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-6 h-px w-24 origin-left bg-gradient-to-r from-violet-400 to-cyan-400"
          />
        </div>
      </div>
    </motion.section>
  );
}

