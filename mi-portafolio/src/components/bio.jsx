
import fotoPerfilJpeg from "../assets/imagen.jpeg"
import imagenWebp from "../assets/imagen.webp";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaDownload } from "react-icons/fa";

export function Bio() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 bg-[#171a4a] rounded-lg">

      <div className="flex-shrink-0">
        <picture>
          <source srcSet={imagenWebp} type="image/webp" />
          <source srcSet={fotoPerfilJpeg} type="image/jpeg" />
          <img
            src={fotoPerfilJpeg}
            alt="Gianella"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
        </picture>
      </div>


      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4">Desarrolladora Full Stack Junior</h1>
        <p className="break-words overflow-hidden text-wrap">
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
          <a
            href="/CV_GianellaLastra.pdf"
            download="CV-Gianella-Lastra.pdf"
            className="flex items-center gap-2 bg-[#2f2c79] text-white px-4 py-2 rounded hover:bg-[#2f2c84] transition"
          >
            <FaDownload />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

//   )
// }
