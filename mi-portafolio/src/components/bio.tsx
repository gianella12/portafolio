// import { motion } from "framer-motion"
import fotoPerfil from "../assets/imagen.jpeg"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


// export const Bio = () => {
//   return (
    // <div className="min-h-screen flex justify-end items-center px-4">
    //   <motion.div
    //     initial={{ opacity: 0, x: 200 }} // entra desde la derecha
    //     animate={{ opacity: 1, x: 0 }}   // termina en su lugar
    //     transition={{ duration: 0.6 }}
    //     className="bg-blue-100  max-w-xs w-full flex items-center justify-center rounded-full"
    //   >
    //     {/* <div className=" rounded-full w-full overflow-hidden"> */}
    //       <img 
    //         src={fotoPerfil} 
    //         alt="foto de perfil"   
    //         className=" runded-full object-cover"
    //       />
    //     {/* </div> */}
    //   </motion.div>
    // </div>

   export function Bio() {
      return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 bg-gray-700 rounded-lg">
          
          <div className="flex-shrink-0">
            <img
              src={fotoPerfil}
              alt="Gianella"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-4">Desarrolladora Full Stack Junior</h1>
            <p>
              Hola soy Gianella, desarrolladora web junior. Me especializo en construir
              interfaces simples y atractivas que ayudan a los usuarios a disfrutar de
              la tecnología sin complicaciones.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
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
        </div>
      );
    }

//   )
// }
