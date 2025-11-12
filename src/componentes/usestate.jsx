export default function FuncionUsestate (){
    const [marca, setMarca] = useState ("Ford");
    const [modelo, setModelo] = useState ("Mustang GT shelby");
    const [anio, setAnio] = useState (1967);
    const [color, setColor] = useState ("gryse oscuro con franjas negras");

    const[persona, setPersona] = useState ({
        nombre: "Levi",
        apellido: "Farias",
        edad: 22,
        profesion: "Desarrollador web"
    });
        //tres puntitos es el operador spread
    const actualizarProfecion = () => {
        setPersona = previusState => ({
            ...previusState,
            profesion: "Desarrollador Full Stack"
        });            
    };

        return(
        <div className="contenido [&>p]:m-3 [&>h1,h2]:m-4 [&>h1,h2]:font-bold">
            <h2>Hook useState</h2>
            <p>Este hook se utiliza para mantener un seguimiento del estado de la aplicacion-<br/>Los estados generalmente se refieren a datos o propiedades de la aplicacion que necesitan ser monitoreados</p>
            <p>El primer paso es importarlo desde react; import &#123; useState &#125; from 'react';</p>
            <p>Luego inicializamos nuestro estado invocando a useState en nuestro componente funcional. useState acepta un estado inicial y retorna 2 valores:
                <ul>
                    <li>El estado actual</li>
                    <li>Una funcion que actualiza el estado</li>
                </ul>
            </p>
            <h2>Ejemplo</h2>
            <code>
                import &#123; useState &125; from 'react';<br/>
                function ColorFavorito()&#123;<br/>
                    const [color, setColor] = useState("Azul");
                &#125;
            </code>
            <p>El primer valor, color, es nuestro estado actual, el segundo valor, setColor, es la funcion que se utiliza para actualizar nuestro estado. Estos nombres son variables que pueden llevar el nombre que quieran.</p>
            <p>Por último, establecemos el estado inicial a "Azul" con la llamada a useState()</p>
            <h2>Ejemplo dos</h2>
            <p>Tengo un auto marca {marca} modelo {modelo} del año {anio} de color {color}</p>
            <h2>Ejemplo con objetos</h2>
            <p>Mi nombre es {persona.nombre} {persona.apellido} tengo {persona.edad} años de edad, mi profecion es {persona.profesion}</p>
            <h2>Actualizando objetos</h2>
            <boutton> onClick={ () => setPersona ({
                nombre: "Juan",
                apellido: "Perez",
                edad: 30,
                profesion: "Ingeniero"
            }) }Cambiar </boutton>       

            <p>Para actualizar un estado que es un objeto, debemos pasar un nuevo objeto a la funcion de actualizacion. <br/> En el ejemplo anterior, al hacer clic en el boton, el estado persona se actualiza con un nuevo objeto que contiene los nuevos valores.</p>
            <p>Cuando un estado se actualiza, el estado entero es sobreescito. </p>
            <p>Que tal si quisieramos actualizar la profeccion </p>
            <p>Para ellos utilizamos el operador spread (Propragacion) </p>
            <boutton onClick={ actualizarProfecion }>Cambiar Profecion</boutton>
            <p>Mi nombre es {persona.nombre} {persona.apellido} tengo {persona.edad} años de edad, mi profecion es {persona.profesion}</p>
            <p>ya que nesesitamos el valor actual del estado a nuestra funcion setPersona que recibe el valor del estado anterior de la variable,</p> 
            <p>ara luego actualizar solo la profecion sin perder los otros valores del objeto.</p>
        </div>
    )
}