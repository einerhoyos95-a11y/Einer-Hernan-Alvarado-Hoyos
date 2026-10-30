import { opcionesMenu } from "../data/menu.js"


function Sidebar({ usuario }) {
  return (
    <aside className='sidebar'>
      <h4 className='sidebar-subtitulo'>Hola, {usuario.nombre}</h4>
      <h3 className='sidebar-titulo'>Menú</h3>
      <nav aria-label='Menú lateral'>
        <ul className='sidebar-menu'>
          {opcionesMenu.map((opcion)=>(
            <li key={opcion.id}>
              <a href={opcion.url}>
                {opcion.icono}{opcion.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className='sidebar-pie'>3312943 - ADSO</p>
    </aside>
  )
}

export default Sidebar
