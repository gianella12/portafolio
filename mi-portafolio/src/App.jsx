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
      <section className="min-h-screen bg-[#464456] text-white p-6">
        <div className="">
          <div className="fixed top-4 right-4 flex  gap-4">
            <a href="mailto:gianellalastra4@gmail.com" >
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
              className="flex items-center gap-2 bg-[#2f2c79] text-white px-4 py-2 rounded hover:bg-[#2f2c84] transition"
            >
              <FaDownload />
              Descargar CV
            </a>
          </div>

          <Bio />
          <div className='flex justify-center mt-9'>
            <AcordeonStack/>
          </div>
          <Proyectos />

        </div>
      </section>

    </>
  )
}

export default App
