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
import { SiTailwindcss, SiExpress, SiMysql, SiHtml5, SiJavascript, SiCss3, SiPostgresql, SiVite,SiTypescript } from "react-icons/si"


export const proyectosData = [
  {
    id: "netfinella",
    nombre: "Netfinella",
    descripcion: "Netfinella es una app web inspirada en Netflix, con funcionalidades de login, registro y gestión de perfiles. Este proyecto me permitió enfrentar desafíos interesantes, como implementar validaciones seguras de emails y contraseñas, y mejorar la experiencia del usuario. Actualmente, Netfinella sigue en desarrollo, explorando nuevas funcionalidades y optimizaciones.",
    descpcionTecnica:'Implementa un sistema de autenticación seguro mediante JWT y contraseñas encriptadas con bcrypt, permitiendo a los usuarios registrarse, iniciar sesión y gestionar múltiples perfiles. La arquitectura está organizada en componentes reutilizables y rutas REST.Conectada a una API externa para obtener y mostrar informacion sobre peliculas.',
    tecnologias: [<FaReact key="react" />, <SiVite key='vite' />,  <SiTypescript key="typeScript" /> ,<SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiMysql key='mysql' />],
    imagenes: [imgLogin, imgCrearUser],
    colores: "from-gray-700 via-cyan-700 to-gray-700"
  },
  {
    id: "registroDeLlamadas",
    nombre: "Registro de llamadas falsas",
    descripcion: "Aplicación web para gestionar y visualizar llamadas generadas de manera eficiente. Permite crear una cantidad determinada de llamadas, editarlas desde el destino al origen y almacenarlas de forma segura en su propia base de datos. Esta herramienta combina React, Node.js y MySQL, ofreciendo una experiencia dinámica y confiable tanto para la visualización como para la gestión de datos.",
    descpcionTecnica:" La aplicación permite generar, visualizar, editar y eliminar llamadas, practicando operaciones CRUD completas. En el backend, se construyó un servidor REST organizado mediante controladores y rutas, con validación de datos y consultas parametrizadas para mayor seguridad al interactuar con la base de datos. Este proyecto me permitió aprender y aplicar la comunicación entre frontend y backend, el manejo de estados complejos en React, la creación de componentes reutilizables y la integración con MySQL, consolidando mis conocimientos en solicitudes CRUD y la gestión de la información de manera estructurada y eficiente.",
    tecnologias: [<FaReact key="react" />,  <SiTypescript key="typeScript" /> ,<SiVite key='vite' />, <SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiMysql key='mysql' />,],
    imagenes: [imgLlamadas, imgLlamadasGeneradas],
    colores: "from-gray-700 via-fuchsia-600 to-gray-700"
  },
  {
    id: "administradorDeTareas",
    nombre: "Administrador de tareas",
    descripcion: "El Administrador de tareas es una aplicación web sencilla y funcional que permite al usuario gestionar sus pendientes de forma intuitiva. Con esta herramienta, se pueden crear nuevas tareas, editarlas, marcarlas como completadas y eliminarlas cuando ya no sean necesarias. Fue el primer paso en el desarrollo de una serie de aplicaciones orientadas a la gestión de datos, y sirvió como base para el proyecto Registro de llamadas falsas, donde se aplicaron conceptos similares pero con tecnologías más modernas y una estructura más compleja.",
    descpcionTecnica:"Es una aplicación web construida con HTML5, CSS3 y JavaScript puro, que permite realizar operaciones CRUD sobre una lista de tareas. Utiliza manipulación del DOM, eventos como click y submit, y estructuras en memoria para gestionar las tareas sin recargar la página. Su diseño moderno se logra mediante gradientes y estilos personalizados en CSS.Este proyecto fue el punto de partida para desarrollar Registro de llamadas falsas, donde se aplicaron los mismos principios con tecnologías más robustas como React, Node.js y MySQL.",
    tecnologias: [<SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key='javascript' />],
    imagenes: [imgAdmTareas, imgAdmTareasPrinc],
    colores: "from-gray-700 via-blue-700 to-gray-700"
  },
  {
    id: "practicaDeTailwind",
    nombre: "Practica de Tailwind 4 con Midu",
    descripcion: "Este proyecto fue parte de mi proceso de aprendizaje en Tailwind CSS. Me ayudó a entender cómo estructurar componentes visuales, aplicar estilos de forma eficiente y trabajar con recursos gráficos como .svg. Además, me permitió experimentar con layouts modernos y reforzar buenas prácticas en diseño frontend",
    descpcionTecnica:"Durante la formación se desarrollaron componentes reutilizables y layouts responsivos utilizando clases utilitarias, sin necesidad de escribir CSS personalizado. Se abordaron conceptos clave como:- Configuración avanzada del archivo tailwind.config.js- Uso de @apply, @layer y @variants para extender estilos- Implementación de temas personalizados y animaciones- Optimización del rendimiento con PurgeCSS y buenas prácticas de producción",
    tecnologias: [<SiHtml5 key="html" />, <SiTailwindcss key="tailwind" />],
    imagenes: [imgPracticaTailwind, imgPracticaTailwind2],
    colores: "from-gray-70 0 via-fuchsia-700 to-gray-700"
  },
  {
    id: "appPokemon",
    nombre: "App Pokemon",
    descripcion: "Una aplicación web interactiva para explorar el mundo Pokémon. Permite descubrir detalles de cada criatura, registrarse, iniciar sesión y marcar como favoritos a los Pokémon preferidos.",
    descpcionTecnica:"Aplicación web que consume la API externa PokeAPI, con registro, inicio de sesión y sistema de 'likes'. La base de datos se gestiona en PostgreSQL, inicialmente con Knex y luego migrada a Drizzle, lo que permitió mejorar la organización y mantenibilidad del código. Además, se utilizó Docker para simplificar la configuración del entorno de desarrollo. Este proyecto me ayudó a reforzar el consumo de APIs, la gestión de bases de datos y la aplicación de buenas prácticas para mantener un código limpio y escalable.",
    tecnologias: [<FaReact key="react" />, <SiTypescript key="typeScript" /> ,<SiVite key='vite' />, <SiTailwindcss key="tailwind" />, <FaNodeJs key='nodejs' />, <SiExpress key='express' />, <SiPostgresql key='postgresql' />],
    imagenes: [imgPokemon1, imgPokemon2, imgPokemon3, imgPokemon4, imgPokemon5],
    colores: "from-gray-700 via-green-700 to-gray-700"
  },
]
