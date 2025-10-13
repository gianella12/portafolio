import './app.css'
import { Header } from "./components/header"
import { Bio } from "./components/bio"
import { Proyectos } from './components/proyectos'
function App() {


  return (
    <>
      <section className='min-h-screen items-center p-7  bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white'>
        <Bio />
        <Proyectos />
      </section>
    </>
  )
}

export default App
