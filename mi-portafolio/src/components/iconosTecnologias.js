import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPostgresql,
  SiVite,
  SiTypescript
} from "react-icons/si"

export const iconosTecnologias = {
  react: {
    icono: FaReact,
    hover: "hover:text-cyan-400"
  },
  vite: {
    icono: SiVite,
    hover: "hover:text-purple-400"
  },
  typescript: {
    icono: SiTypescript,
    hover: "hover:text-blue-500"
  },
  tailwind: {
    icono: SiTailwindcss,
    hover: "hover:text-sky-400"
  },
  node: {
    icono: FaNodeJs,
    hover: "hover:text-green-500"
  },
  express: {
    icono: SiExpress,
    hover: "hover:text-gray-400"
  },
  mysql: {
    icono: SiMysql,
    hover: "hover:text-blue-600"
  },
  postgresql: {
    icono: SiPostgresql,
    hover: "hover:text-indigo-500"
  },
  html: {
    icono: SiHtml5,
    hover: "hover:text-orange-500"
  },
  css: {
    icono: SiCss3,
    hover: "hover:text-blue-400"
  },
  javascript: {
    icono: SiJavascript,
    hover: "hover:text-yellow-400"
  }
}

