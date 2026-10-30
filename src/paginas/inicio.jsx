import { Link } from "react-router"
function Inicio(){
    const programa= 'Analisis y Desarrrollo de Software'


return(
    <section>
        <h2> Bienvenidos al programa {programa}</h2>
        <p> Este es el dashboard de la competencia de fronted con React</p>
        <p>
            empieza por conocer <Link to ="/perfil"> mi perfil </Link>
            o tambien revisa las {' '}
            <Link to='/tecnologias'> Tecnologias </Link> que vamos a trabajar
        </p>
    </section>
)
}

export default Inicio