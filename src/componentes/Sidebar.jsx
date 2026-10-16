function Sidebar({ usuario }) {
  return (
    <aside className='sidebar'>
      <h4 className='sidebar-subtitulo'>Hola, {usuario.nombre}</h4>
      <h3 className='sidebar-titulo'>Menú</h3>
      <nav aria-label='Menú lateral'>
        <ul className='sidebar-menu'>
          <li><a href='#'>🏠 Inicio</a></li>
          <li><a href='#'>🧑‍🦰 Mi perfil</a></li>
          <li><a href='#'>💽 Tecnologías</a></li>
          <li><a href='#'>🫙 Recursos</a></li>
          <li><a href='#'>📞 Contactos</a></li>
        </ul>
      </nav>

      <p className='sidebar-pie'>3312943 - ADSO</p>
    </aside>
  )
}

export default Sidebar
