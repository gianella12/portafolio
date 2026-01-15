
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiVite,
} from "react-icons/si";

export function AcordeonStack() {
    const [abierto, setAbierto] = useState(false);

    const item =
        "group flex items-center justify-center h-14 w-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";

    const icono =
        "text-2xl text-neutral-700 transition-colors duration-200";

    return (
        <div className="w-full max-w-md rounded-2xl  border border-neutral-200 overflow-hidden">

            <button
                onClick={() => setAbierto(!abierto)}
                className="w-full flex items-center justify-between px-5 py-4 hover:cursor-pointer transition"
            >
                <span className="text-sm font-semibold">
                    Stack
                </span>

                <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${abierto ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${abierto
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden px-5 pb-5">
                    <div className="grid grid-cols-4 gap-4">
                        {/* Frontend */}
                        <div className={item}>
                            <SiHtml5 className={`${icono} group-hover:text-orange-500`} />
                        </div>

                        <div className={item}>
                            <SiCss3 className={`${icono} group-hover:text-blue-500`} />
                        </div>

                        <div className={item}>
                            <SiJavascript className={`${icono} group-hover:text-yellow-400`} />
                        </div>
                        <div className={item}>
                            <FaReact className={`${icono} group-hover:text-sky-500`} />
                        </div>
                        <div className={item}>
                            <SiTypescript className={`${icono} group-hover:text-blue-600`} />
                        </div>
                        <div className={item}>
                            <SiTailwindcss className={`${icono} group-hover:text-cyan-500`} />
                        </div>

                        {/* Backend */}
                        <div className={item}>
                            <FaNodeJs className={`${icono} group-hover:text-green-600`} />
                        </div>
                        <div className={item}>
                            <SiExpress className={`${icono} group-hover:text-neutral-900`} />
                        </div>

                        {/* DB */}
                        <div className={item}>
                            <SiMysql className={`${icono} group-hover:text-orange-600`} />
                        </div>
                        <div className={item}>
                            <SiPostgresql className={`${icono} group-hover:text-blue-700`} />
                        </div>
                        {/* Otros */}
                        <div className={item}>
                            <FaGit className={`${icono} group-hover:text-orange-500`} />
                        </div>
                        <div className={item}>
                            <FaGithub className={`${icono} group-hover:text-neutral-900`} />
                        </div>
                        <div className={item}>
                            <SiVite className={`${icono} group-hover:text-purple-500`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
