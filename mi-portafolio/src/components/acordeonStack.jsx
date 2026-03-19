import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa"
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiVite,
  SiNextdotjs, SiDocker, SiDrizzle, SiGooglegemini,
} from "react-icons/si"

const tecnologias = [
  { Icono: SiHtml5,        hover: "group-hover:text-orange-500" },
  { Icono: SiCss3,         hover: "group-hover:text-blue-500"   },
  { Icono: SiJavascript,   hover: "group-hover:text-yellow-400" },
  { Icono: SiTypescript,   hover: "group-hover:text-blue-500"   },
  { Icono: FaReact,        hover: "group-hover:text-sky-400"    },
  { Icono: SiNextdotjs,    hover: "group-hover:text-white"      },
  { Icono: SiTailwindcss,  hover: "group-hover:text-cyan-400"   },
  { Icono: SiVite,         hover: "group-hover:text-violet-400" },
  { Icono: FaNodeJs,       hover: "group-hover:text-green-500"  },
  { Icono: SiExpress,      hover: "group-hover:text-white"      },
  { Icono: SiMysql,        hover: "group-hover:text-orange-500" },
  { Icono: SiPostgresql,   hover: "group-hover:text-blue-400"   },
  { Icono: SiDrizzle,      hover: "group-hover:text-green-400"  },
  { Icono: SiDocker,       hover: "group-hover:text-sky-400"    },
  { Icono: SiGooglegemini, hover: "group-hover:text-blue-300"   },
  { Icono: FaGit,          hover: "group-hover:text-orange-500" },
  { Icono: FaGithub,       hover: "group-hover:text-white"      },
]

export function AcordeonStack() {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="w-full max-w-[640px] rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md">

      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between px-5 py-4 cursor-pointer transition hover:bg-white/5"
      >
        <span className="text-sm text-white/50">{abierto ? "Ocultar" : "Ver tecnologías"}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-white/40 transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          abierto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 pb-5">
          <div className="h-px bg-white/10 mb-4" />
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-3">
            {tecnologias.map(({ Icono, hover }, i) => (
              <div
                key={i}
                className="group flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 border border-white/8 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <Icono className={`text-xl text-white/40 transition-colors duration-200 ${hover}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
