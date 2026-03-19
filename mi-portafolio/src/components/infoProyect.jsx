import imgLoginWebp from '../assets/login-netfinella.webp'
import imgLoginJpeg from '../assets/login-netfinella.jpeg'
import imgCrearUserWebp from '../assets/crear-user-netfinella.webp'
import imgCrearUserJpeg from '../assets/crear-user-netfinella.jpeg'
import imgLlamadasWebp from '../assets/registro-llamadas-.webp'
import imgLlamadasJpeg from '../assets/registro-llamadas-.jpeg'
import imgLlamadasGeneradasWebp from '../assets/llamadas-generadas.webp'
import imgLlamadasGeneradasJpeg from '../assets/llamadas-generadas.jpeg'
import imgAdmTareasWebp from '../assets/administrador-tareas.webp'
import imgAdmTareasJpeg from '../assets/administrador-tareas.jpeg'
import imgAdmTareasPrincWebp from '../assets/administrador-tareas-principal.webp'
import imgAdmTareasPrincJpeg from '../assets/administrador-tareas-principal.jpeg'
import imgPracticaTailwindWebp from '../assets/practica-tailwind.webp'
import imgPracticaTailwindJpeg from '../assets/practica-tailwind.jpeg'
import imgPracticaTailwind2Webp from '../assets/practica-tailwind2.webp'
import imgPracticaTailwind2Jpeg from '../assets/practica-tailwind2.jpeg'
import imgPokemon1Jpeg from '../assets/pokemon1.jpeg'
import imgPokemon2Jpeg from '../assets/pokemon2.jpeg'
import imgPokemon3Jpeg from '../assets/pokemon3.jpeg'
import imgPokemon4Jpeg from '../assets/pokemon4.jpeg'
import imgPokemon5Jpeg from '../assets/pokemon5.jpeg'
import imgPokemon1Webp from '../assets/pokemon1.webp'
import imgPokemon2Webp from '../assets/pokemon2.webp'
import imgPokemon3Webp from '../assets/pokemon3.webp'
import imgPokemon4Webp from '../assets/pokemon4.webp'
import imgPokemon5Webp from '../assets/pokemon5.webp'
import imgSpotia1Jpeg from '../assets/imgSpotia1.jpeg'
import imgSpotia1Webp from '../assets/imgSpotia1.webp'
import imgSpotia2Jpeg from '../assets/imgSpotia2.jpeg'
import imgSpotia2Webp from '../assets/imgSpotia2.webp'
import imgSpotia3Jpeg from '../assets/imgSpotia3.jpeg'
import imgSpotia3Webp from '../assets/imgSpotia3.webp'
import imgSpotia4Jpeg from '../assets/imgSpotia4.jpeg'
import imgSpotia4Webp from '../assets/imgSpotia4.webp'
import imgSpotia5Jpeg from '../assets/imgSpotia5.jpeg'
import imgSpotia5Webp from '../assets/imgSpotia5.webp'
import imgSpotia6Jpeg from '../assets/imgSpotia6.jpeg'
import imgSpotia6Webp from '../assets/imgSpotia6.jpeg'


export const proyectosData = [
  {
    id: "netfinella",
    nombre: "Netfinella",
    descripcion: "Web inspirada en Netflix, con funcionalidades de login, registro y gestión de perfiles. Este proyecto me permitió enfrentar desafíos interesantes, como implementar validaciones seguras de emails y contraseñas, y mejorar la experiencia del usuario.",
    descpcionTecnica: 'Implementa un sistema de autenticación seguro mediante JWT y contraseñas encriptadas con bcrypt, permitiendo a los usuarios registrarse, iniciar sesión y gestionar múltiples perfiles. La arquitectura está organizada en componentes reutilizables y rutas REST.Conectada a una API externa para obtener y mostrar informacion sobre peliculas.',
    tecnologias: [
      "react",
      "vite",
      "typescript",
      "tailwind",
      "node",
      "express",
      "mysql"
    ],
    imagenesJpeg: [imgLoginJpeg, imgCrearUserJpeg],
    imagenesWebp: [imgLoginWebp, imgCrearUserWebp],
    colores: "from-gray-700 via-cyan-700 to-gray-700"
  },
  {
    id: "registroDeLlamadas",
    nombre: "Registro de llamadas",
    descripcion: "Aplicación web para gestionar y visualizar llamadas generadas de manera eficiente. Permite crear una cantidad determinada de llamadas, editarlas desde el destino al origen y almacenarlas de forma segura en su propia base de datos.",
    descpcionTecnica: " La aplicación permite generar, visualizar, editar y eliminar llamadas, practicando operaciones CRUD completas. En el backend, se construyó un servidor REST organizado mediante controladores y rutas, con validación de datos y consultas parametrizadas para mayor seguridad al interactuar con la base de datos. Este proyecto me permitió aprender y aplicar la comunicación entre frontend y backend, el manejo de estados complejos en React, la creación de componentes reutilizables y la integración con MySQL, consolidando mis conocimientos en solicitudes CRUD y la gestión de la información de manera estructurada y eficiente.",
    tecnologias: [
      "react",
      "typescript",
      "vite",
      "tailwind",
      "node",
      "express",
      "mysql"
    ], imagenesJpeg: [imgLlamadasJpeg, imgLlamadasGeneradasJpeg],
    imagenesWebp: [imgLlamadasWebp, imgLlamadasGeneradasWebp],
    colores: "from-gray-700 via-fuchsia-600 to-gray-700"
  },
  {
    id: "administradorDeTareas",
    nombre: "Administrador de tareas",
    descripcion: "Es una aplicacion sencilla y funcional que permite al usuario gestionar sus pendientes de forma intuitiva. Con esta herramienta, se pueden crear nuevas tareas, editarlas, marcarlas como completadas y eliminarlas cuando ya no sean necesarias.",
    descpcionTecnica: "Es una aplicación web construida con HTML5, CSS3 y JavaScript puro, que permite realizar operaciones CRUD sobre una lista de tareas. Utiliza manipulación del DOM, eventos como click y submit, y estructuras en memoria para gestionar las tareas sin recargar la página. Su diseño moderno se logra mediante gradientes y estilos personalizados en CSS.Este proyecto fue el punto de partida para desarrollar Registro de llamadas falsas, donde se aplicaron los mismos principios con tecnologías más robustas como React, Node.js y MySQL.",
    tecnologias: [
      "html",
      "css",
      "javascript"
    ],
    imagenesJpeg: [imgAdmTareasJpeg, imgAdmTareasPrincJpeg],
    imagenesWebp: [imgAdmTareasWebp, imgAdmTareasPrincWebp],
    colores: "from-gray-700 via-blue-700 to-gray-700"
  },
  {
    id: "practicaDeTailwind",
    nombre: "Practica de Tailwind 4 con Midu",
    descripcion: "Este proyecto fue parte de mi proceso de aprendizaje en Tailwind CSS. Me ayudó a entender cómo estructurar componentes visuales, aplicar estilos de forma eficiente y trabajar con recursos gráficos como .svg. Además, me permitió experimentar con layouts modernos y reforzar buenas prácticas en diseño frontend",
    descpcionTecnica: "Durante la formación se desarrollaron componentes reutilizables y layouts responsivos utilizando clases utilitarias, sin necesidad de escribir CSS personalizado. Se abordaron conceptos clave como:- Configuración avanzada del archivo tailwind.config.js- Uso de @apply, @layer y @variants para extender estilos- Implementación de temas personalizados y animaciones- Optimización del rendimiento con PurgeCSS y buenas prácticas de producción",
    tecnologias: [
      "html",
      "tailwind"
    ],
    imagenesJpeg: [imgPracticaTailwindJpeg, imgPracticaTailwind2Jpeg],
    imagenesWebp: [imgPracticaTailwindWebp, imgPracticaTailwind2Webp],
    colores: "from-gray-70 0 via-fuchsia-700 to-gray-700"
  },
  {
    id: "appPokemon",
    nombre: "App Pokemon",
    descripcion: "Una aplicación web interactiva para explorar el mundo Pokémon. Permite descubrir detalles de cada criatura, registrarse, iniciar sesión y marcar como favoritos a los Pokémon preferidos.",
    descpcionTecnica: "Aplicación web que consume la API externa PokeAPI, con registro, inicio de sesión y sistema de 'likes'. La base de datos se gestiona en PostgreSQL, inicialmente con Knex y luego migrada a Drizzle, lo que permitió mejorar la organización y mantenibilidad del código. Además, se utilizó Docker para simplificar la configuración del entorno de desarrollo. Este proyecto me ayudó a reforzar el consumo de APIs, la gestión de bases de datos y la aplicación de buenas prácticas para mantener un código limpio y escalable.",
    tecnologias: [
      "react",
      "typescript",
      "vite",
      "tailwind",
      "node",
      "express",
      "postgresql"
    ],
    imagenesJpeg: [imgPokemon1Jpeg, imgPokemon2Jpeg, imgPokemon3Jpeg, imgPokemon4Jpeg, imgPokemon5Jpeg],
    imagenesWebp: [imgPokemon1Webp, imgPokemon2Webp, imgPokemon3Webp, imgPokemon4Webp, imgPokemon5Webp],
    colores: "from-gray-700 via-green-700 to-gray-700"
  },
   {                                                                             
    id: "appSpotia",                                                            
    nombre: "Spotia",                                                           
    descripcion: "Una aplicación web que analiza tu historial de escucha en Spotify y genera un perfil musical personalizado con inteligencia artificial. Descubre tu alineación D&D musical, análisis emocional, tendencia de voto y genera playlists mediante prompts en lenguaje natural.",                      
    descpcionTecnica: "Aplicación full-stack construida con Next.js (App Router) que integra la API de Spotify mediante OAuth 2.0 para obtener los artistas y canciones más escuchadas del usuario. Utiliza la API de Google Gemini (con soporte para Claude y OpenAI) para generar perfiles musicales y playlists personalizadas. La base de datos es PostgreSQL gestionada con Drizzle ORM, e incluye un sistema de caché de generaciones de IA para optimizar el uso de la API. El entorno de desarrollo se containeriza con Docker. El proyecto me permitió profundizar en autenticación OAuth, integración de múltiples APIs de IA, manejo de caché y arquitectura de aplicaciones full-stack modernas.",
    tecnologias: [
      "react",
      "nextjs",
      "typescript",
      "tailwind",
      "postgresql",                                                             
      "drizzle",
      "docker",                                                                 
      "gemini"    
    ],
    imagenesJpeg: [imgSpotia1Jpeg, imgSpotia2Jpeg, imgSpotia3Jpeg,imgSpotia4Jpeg, imgSpotia5Jpeg],                                              
    imagenesWebp: [imgSpotia1Webp, imgSpotia2Webp, imgSpotia3Webp,imgSpotia4Webp, imgSpotia5Webp],                                              
    colores: "from-gray-900 via-green-800 to-gray-900"
  }   
]
