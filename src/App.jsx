import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import fotoperfil from'./imagenes/perfil.jpg'
import fotousuario from './imagenes/foto.jpg'

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
        <h2>Bienvenidos al programa {programa}</h2>
        <Presentacion informacionPersonal={informacionPersonal} />

        <section className='tarjetas'>
          <Tarjeta 
          icono="⚛️"
          titulo="React"
          descripcion="Biblioteca de JavaScript para construir interfaces con componentes."
          horas="120"
          destacada={true}
          />
          <Tarjeta
            icono="⚡"
            titulo="vite"
            descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto"
            horas={60}
            destacada={false}
          />
          <Tarjeta
            icono="🔎"
            titulo="Eslint"
            descripcion="revisa la calidad del código y encuentra errores de sintaxis y estilo"
            horas={20}
            destacada={true}
          />
          
        </section>
      </main>

      <PiePagina />
    </div>
  )
}

export default App