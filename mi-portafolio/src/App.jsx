import './app.css'
import { Bio } from "./components/bio"
import { Proyectos } from './components/proyectos'
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaDownload } from "react-icons/fa";
import { AcordeonStack } from './components/acordeonStack';



function App() {


  return (
    <>
      <section className="min-h-screen bg-[#464456] text-white px-4 py-6 sm:px-6">
        <div className="">
          <div className="   static
    sm:fixed sm:top-4 sm:right-4
    flex gap-4
    z-50">
            <a href="gianellalastra4@gmail.com" >
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
              download="gianella_lastra_cv.pdf"
              className="  flex items-center gap-2 
        bg-[#2f2c79] text-white 
        px-3 py-2 text-sm
        rounded-lg 
        hover:bg-[#2f2c84] 
        transition"
            >
              <FaDownload />
              <span className="hidden sm:inline">Descargar CV</span>
            </a>
          </div>

          {/* <Bio />
          <div className='flex justify-center mt-9'>
            <AcordeonStack />
          </div>
          <Proyectos /> */}
          <div className="max-w-6xl mx-auto">
            <Bio />

            <div className="flex justify-center mt-8 px-2">
              <AcordeonStack />
            </div>

            <Proyectos />
          </div>

        </div>
      </section>

    </>
  )
}

export default App
