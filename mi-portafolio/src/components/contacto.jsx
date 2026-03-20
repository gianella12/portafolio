import { motion } from "framer-motion"
import { SiGmail } from "react-icons/si"
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa"

const links = [
  {
    label: "Email",
    valor: "gianellalastra4@gmail.com",
    href: "mailto:gianellalastra4@gmail.com",
    Icono: SiGmail,
    desc: "Escribime directamente",
  },
  {
    label: "LinkedIn",
    valor: "gianella-carla-lastra",
    href: "https://www.linkedin.com/in/gianella-carla-lastra/",
    Icono: FaLinkedin,
    desc: "Conectemos en LinkedIn",
  },
  {
    label: "GitHub",
    valor: "gianella12",
    href: "https://github.com/gianella12",
    Icono: FaGithub,
    desc: "Mirá mis proyectos",
  },
]

export function Contacto() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-4"
        >
          <span className="accent-line" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90">Contacto</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/45 text-sm sm:text-base leading-relaxed max-w-lg mb-10"
        >
          Estoy disponible para nuevas oportunidades. Si tenés un proyecto interesante
          o simplemente querés conocerme, no dudes en escribirme.
        </motion.p>

        {/* Cards de contacto */}
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ label, valor, href, Icono, desc }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-3 p-5 bg-white/3 hover:bg-white/5 border border-white/7 hover:border-indigo-500/25 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/18 transition-all duration-200">
                  <Icono className="text-indigo-400 text-base" />
                </div>
                <FaArrowRight className="text-white/15 group-hover:text-indigo-400/60 group-hover:translate-x-0.5 transition-all duration-200 text-xs" />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">{label}</p>
                <p className="text-white/70 text-xs font-medium truncate">{valor}</p>
                <p className="text-white/30 text-[11px] mt-0.5">{desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
