import './app.css'
import { Bio } from "./components/bio"
import { Proyectos } from './components/proyectos'

function App() {


  return (
    <>
      <section className='min-h-screen items-center p-7  bg-[#000020] text-white'>
        <Bio />
        <Proyectos />
      </section>
    </>
  )
}

export default App
