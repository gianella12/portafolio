
import { useState } from "react"
import { VerImg } from './verImg.tsx'
import imgLogin from '../assets/login-netfinella.webp'
import imgCrearUser from '../assets/crear-user-netfinella.webp'
import imgLlamadas from '../assets/registro-llamadas-.webp'
import imgLlamadasGeneradas from '../assets/llamadas-generadas.webp'
import imgAdmTareas from '../assets/administrador-tareas.webp'
import imgAdmTareasPrinc from '../assets/administrador-tareas-principal.webp'
import imgPracticaTailwind from '../assets/practica-tailwind.webp'
import imgPracticaTailwind2 from '../assets/practica-tailwind2.webp'
import imgPokemon1 from '../assets/pokemon1.webp'
import imgPokemon2 from '../assets/pokemon2.webp'
import imgPokemon3 from '../assets/pokemon3.webp'
import imgPokemon4 from '../assets/pokemon4.webp'
import imgPokemon5 from '../assets/pokemon5.webp'



import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiExpress, SiMysql, SiHtml5, SiJavascript, SiCss3, SiPostgresql, SiVite } from "react-icons/si"

import type { ReactNode } from "react"

type Proyecto = {
  id: string
  nombre: string
  descripcion: string
  tecnologias: ReactNode[]
  imagenes: string[]
  colores: string
}

const proyectosData: Proyecto[] = [
  {
    id: "netfinella",
    nombre: "Netfinella",
    descripcion: "Netfinella es una app web inspirada en Netflix, con funcionalidades de login, registro y gestión de perfiles. Este proyecto me permitió enfrentar desafíos interesantes, como implementar validaciones seguras de emails y contraseñas, y mejorar la experiencia del usuario. Actualmente, Netfinella sigue en desarrollo, explorando nuevas funcionalidades y optimizaciones."
    ,
    tecnologias: [<FaReact key="react" />, <SiVite key='vite' />, <SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiMysql key='mysql' />],
    imagenes: [imgLogin, imgCrearUser],
    colores: "from-gray-700 via-cyan-700 to-gray-700"
  },
  {
    id: "registroDeLlamadas",
    nombre: "Registro de llamadas falsas",
    descripcion: "Aplicación web para gestionar y visualizar llamadas generadas de manera eficiente. Permite crear una cantidad determinada de llamadas, editarlas desde el destino al origen y almacenarlas de forma segura en su propia base de datos. Esta herramienta combina React, Node.js y MySQL, ofreciendo una experiencia dinámica y confiable tanto para la visualización como para la gestión de datos.",
    tecnologias: [<FaReact key="react" />, <SiVite key='vite' />, <SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiMysql key='mysql' />],
    imagenes: [imgLlamadas, imgLlamadasGeneradas],
    colores: "from-gray-700 via-fuchsia-600 to-gray-700"
  },
  {
    id: "administradorDeTareas",
    nombre: "Administrador de tareas",
    descripcion: "App web para crear, editar, marcar como completas y borrar tareas.",
    tecnologias: [<SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key='javascript' />],
    imagenes: [imgAdmTareas, imgAdmTareasPrinc],
    colores: "from-gray-700 via-blue-700 to-gray-700"
  },
  {
    id: "practicaDeTailwind",
    nombre: "Practica de Tailwind 4 con Midu",
    descripcion: "Este proyecto fue parte de mi proceso de aprendizaje en Tailwind CSS. Me ayudó a entender cómo estructurar componentes visuales, aplicar estilos de forma eficiente y trabajar con recursos gráficos como .svg. Además, me permitió experimentar con layouts modernos y reforzar buenas prácticas en diseño frontend",
    tecnologias: [<SiHtml5 key="html" />, <SiTailwindcss key="tailwind" />],
    imagenes: [imgPracticaTailwind, imgPracticaTailwind2],
    colores: "from-gray-700 via-fuchsia-700 to-gray-700"
  },
  {
    id: "appPokemon",
    nombre: "App Pokemon",
    descripcion: "Es una aplicación web que consume la API externa PokeAPI, permitiendo explorar una selección de Pokémon con detalles completos de cada uno. Los usuarios pueden registrarse, iniciar sesión y dar “like” a sus Pokémon favoritos. El proyecto incluye una base de datos en PostgreSQL y nos permitió aprender tecnologías como Docker, Knex y Drizzle. Además, fue una excelente práctica para mejorar la lógica de programación y desarrollar un código limpio y mantenible.",
    tecnologias: [<FaReact key="react" />, <SiVite key='vite' />, <SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiPostgresql key='postgresql' />],
    imagenes: [imgPokemon1, imgPokemon2, imgPokemon3, imgPokemon4, imgPokemon5],
    colores: "from-gray-700 via-green-700 to-gray-700"
  },
]

export const Proyectos = () => {
  const [activeProject, setActiveProject] = useState<null | Proyecto>(null)
  const [imgSeleccionada, setImg] = useState<string>('')

  return (
    <>
      <div className="font-bold font-sans text-2xl text-white">

        <h1 className="mb-4 ml-1">Mis proyectos</h1>

        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            {proyectosData.map((proyecto) => (
              <div
                key={proyecto.id}
                onClick={() => setActiveProject(proyecto)}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-600 via-gray-700 to-gray-400
                flex flex-col items-start hover:scale-105 hover:contrast-125 transform-gpu will-change-transform
                transition col-span-1 min-h-[180px] `}
              >
                <span className="absolute bottom-5 left-0 font-bold text-2xl p-3">
                  {proyecto.nombre}
                </span>
                <span className="absolute top-2 left-2 text-md  p-1 flex gap-1">
                  {proyecto.tecnologias.map((tec, i) =>
                    typeof tec === "string" ? (
                      <span key={i}>{tec}</span>
                    ) : (
                      <span key={i}>{tec}</span>
                    )
                  )}
                </span>
                <button className="absolute bottom-2 right-2 px-3 py-1 mt-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                  Descripción técnica
                </button>
              </div>
            ))}
            {/* <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              Descripción técnica
            </button> */}

          </div>

          <div className="bg-white p-6 rounded-xl  h-[380px] overflow-auto">
            {activeProject ? (
              <>
                <h2 className="text-2xl font-bold text-gray-500 mb-2">{activeProject.nombre}</h2>
                <p className="text-gray-700 text-xl mb-3">{activeProject.descripcion}</p>
                <div className="flex gap-4 overflow-x-auto">
                  {activeProject.imagenes.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="h-32 rounded border border-b-black"
                      onClick={() => setImg(img)}
                    />
                  ))}
                  <div className="">
                    {imgSeleccionada &&
                      <VerImg img={imgSeleccionada} onClose={() => setImg('')} />
                    }
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-400">
                Haz click en un proyecto para ver detalles
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
