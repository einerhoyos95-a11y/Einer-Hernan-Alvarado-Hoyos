import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import { tecnologias } from './data/tecnologias.js'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import fotoperfil from'./imagenes/perfil.jpg'
import fotousuario from './imagenes/foto.jpg'
import Inicio from './paginas/inicio.jsx'
import Perfil from './paginas/perfil.jsx'
import { Route, Routes } from 'react-router'

function App() {
  const programa = 'Análisis y Desarrollo de Software'

  const usuario ={
    correo: 'einerhoyos95@gmail.com',
    nombre:'Einer Hernan Alvarado Hoyos',
    rol: 'Aprendiz ADSO',
    foto: fotoperfil,
  }

  const informacionPersonal={
    nombre: 'Mi nombre es: Einer Hernan Alvarado Hoyos',
    barrio: 'Vivo en: Indianapolis',
    correo: 'mi correo es: einerhoyos95@gmail.com',
    telefono: 'Mi telefono es: 300716278',
    rol: 'Soy aprendiz SENA',
    foto: fotousuario,
  }
  

  return (
    <div className='layaut'>
      <Encabezado usuario={usuario}/>
      <Sidebar usuario={usuario} />

      <main className='contenido'>
        <Routes>
          <Route path='/'element= {<Inicio/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
        </Routes>
      </main>

      <PiePagina />
    </div>
  )
}

export default App