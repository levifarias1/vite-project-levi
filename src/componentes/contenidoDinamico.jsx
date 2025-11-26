import listaPersonas from '../json/personas.json'
import listaPeliculas from '../json/peliculas.json'
export default function contenidoDinamico(){

function Ficha(){
    return(
        <div
            id='contenedorDeElementos'
            className='grid grid-cols-4 gap-4 bg-blue-500 p-2 w-6/12 rounded-lg'>
            {
                listaPeliculas.map((peli, indice) =>(
                    <div id='elemento' key={indice} className="border p-2 rounded-lg bg-neutral-400 bg-gradiant">
                        <h4>{peli.titulo}</h4>
                        <img className='w-full rounded-lg' src={peli.imagen} />
                        <p>duracion: {peli.duracion}</p>
                        <p>genero: {peli.genero}</p>
                        <p>calificacion: {peli.calificacion}</p>
                    </div>
                ))
            }
        </div>
    )
}


    return(
        <div>
            <h2>Creacion dinamica</h2>
            <p>Utilizando las funcionalidades de reac podemos generar elementos HTMNL de manera autimatica. Para esto utukizamos una lista de objetos y la funcion map</p>
            <h3>JSON</h3>
            <p>JSON Es el aconimo de javascrit objet notation Es un formato que define objetps de javascrip que define objetps de. estos </p>
            <h3>Tabla dinamica</h3>
            <p>En este ejemplo vamos a cargar una tabla con contenido de un archivo .json</p>
            <div>
                <table className='table-auto border border-b-blue-400 w-xl [&_th]: border-b-blue-4000 [&_td]:  border-amber-500 [&_td]: p-1 '>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Mail</th>
                            <th>Curso</th>
                            <th>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPersonas.map((persona, indice) => (
                                <tr key={indice}>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.curso}</td>
                                    <td>{persona.mail}</td>
                                    <td>{persona.nota}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h3>Contenedores Dinamicos</h3>
            <p>No solamente podemos generar tablas, el contenido dinamico puede ser cualquier cosa desde un tab p hasta un tag div con multiples elementos internos. Es importante primero definir una esctructura estable ya que el contenido se ira cargando de manera automatica. </p>
            <div>
                <Ficha></Ficha>
            </div>
        </div>
    )
}