function Presentacion({ informacionPersonal }) {
  return (
    <article className='presentacion'>
      <img 
        src={informacionPersonal.foto} 
        alt={`Foto de ${informacionPersonal.nombre}`} 
        className='referencia' 
      />
      <h1 className='presenttacion-nombre'>{informacionPersonal.nombre}</h1>
      <h2 className='presentacion-correo'>{informacionPersonal.correo}</h2>
      <span className='presentacion-rol'>{informacionPersonal.rol}</span>
      <span className="presentacion-contactos">{informacionPersonal.contactos}</span>
      
      <p>{informacionPersonal.barrio}</p>
      <p>{informacionPersonal.telefono}</p>
    </article>
  )
}

export default Presentacion