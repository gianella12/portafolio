import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

export const Header = (() => {
    return (
        <>
<div className="min-h-screen flex items-center justify-start font-bold font-sans overflow-hidden ">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gray-500 p-8 rounded-xl text-white max-w-2xl w-full "
  >
    <div className="flex flex-col justify-between h-full ">
      <div>
        <h1 className="text-2xl font-bold mb-4 md:text-3xl">
          Desarrolladora Full Stack junior
        </h1>
        <p className="leading-relaxed text-lg text-white ">
          Hola soy Gianella, desarrolladora web junior. Me especializo en
          construir interfaces simples y atractivas que ayudan a los usuarios a
          disfrutar de la tecnología sin complicaciones.
        </p>
      </div>
      <div className="flex gap-4 mt-6">
        <a href="mailto:gianellalastra4@gmail.com">
          <SiGmail size={34} />
        </a>
        <a href="https://www.linkedin.com/in/gianella-carla-lastra/">
          <FaLinkedin size={34} />
        </a>
        <a href="https://github.com/gianella12">
          <FaGithub size={34} />
        </a>
      </div>
    </div>
  </motion.div>
</div>

        </>
    )
})