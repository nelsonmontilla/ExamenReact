import { useState, useEfect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navegacion from './components/Navegacion'
import Tarjetainv from './components/Tarjetainv'
import Inicio from './assets/views/Inicio'
import Inventario from './assets/views/Inventario'



function App() {
  const [path, setPath] = useState("Inicio")
  const [view, setview] = useState(<Inicio/>)
  
  useEffect(() => {
    if (path === "Inicio"){
      setview(<Inicio/>)
    }  
     if (path === "Inventario"){
      setview(<Inventario/>)
    }  }, {view})
  


  return (
    <>
  
  <Navegacion path={path} setPant={setPath}/>
  
  <main className='min-h-screen'>
    {view}
  </main>
    </>

  )
}

export default App
