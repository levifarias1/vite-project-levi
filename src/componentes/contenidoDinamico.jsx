import listaPersonas from '../json/personas.json'

export default function contenidoDinamico(){
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
        </div>
    )
}