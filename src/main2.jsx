function Contenido() {
    const [campoNombre, setCampoNombre] = useState("");
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResultado] = useState(0);

    // ✅ Función que gestiona los cambios de todos los inputs
    const gestionaCambio = (event) => {
        const { name, value } = event.target;

        if (name === "campoNombre") {
            setCampoNombre(value);
        }
        if (name === "numero1") {
            setNumero1(value);
        }
        if (name === "numero2") {
            setNumero2(value);
        }
    };

    // ✅ Función sumar
    const sumar = () => {
        const n1 = parseFloat(numero1) || 0;
        const n2 = parseFloat(numero2) || 0;
        setResultado(n1 + n2);
    };

    return (
    <div>
        <h2>Funciones en JS</h2>
        <p>Las funciones son el bloque de construccion primcipal en toda la programacion. Son bloques de codigo reutilizables diseñados para realizar una tarea en particular. Estas se ejecutan cuando son llamadas o imvocadas </p>
        <p>Ver ejemplo en codigo fuente</p>
        <p>Las funciones estan compuestas por una caabecera que contiene la palabra clave fuction seguido del identificador (Mifuncion) Con sus parametros. Obcionalmente las funciones pueden retornar un valor al lugar donde fueron imvocadas con la palabra clave return </p>
        <p>La siguentefrase fue generada por una funcion </p>
        <p>Podemos definir parametros en la funcion que son valores que esta recibe para ser procesados los emviamos al momento de imvocar la fucnion en forma de argumentos</p>
        <p>Imvocamos a la funcion con un parametro del tipo string: {Ejemplo2("Levi")}</p>
        <p>Se pueden definir la cantidad que querramos de parametros siempre que los emviemos en el orden correcto. Estos deben estar separados por una coma.</p>
        <p>Esta funcion devuelve la suma de dos numeros enviados como argumentos: {Ejemplo3(3,3)}</p>

        <h2>Ejersicio: </h2>
        <p>Mostrar la resta de dos numeros: {Ejersicio1(4,2)}</p>
        <p>Mostrar la division de dos numeros: {Ejersicio2(12, 2)}</p>
        <p>Mostrar la multiplicaion de dos numeros: {Ejersicio3(3,3)}</p>

        <h2>Funciones flecha</h2>
        <p>Otra manera de utilizar las funciones es definirlas como varialbes: letMifuncion = function (a,b) &#123;return a * b&#125;;</p>
        <p>Esta funcion devuelve el promedio de cuatro numeros: {promedio(5,6,8,500)}</p>
        <p>Con las funciones flecha podemos expresar estas funciones de manera mas corta: let miFuncion = (a,b) =&gt; </p>
        <p>Esta funcion devuelve el promedio de tres numeros: {miFuncionPromedio3(5,6,7)}</p>
        <p>De esta manera podemos simplificar la sintaxis omitiendo lapalabra clave fuction, retrun y las llaves</p>
        <p>funcion hola: {hola()}</p>
        <p>SI la funcion solo tiene una sentecncia como valor ed retorno podemos remover las llaves y el retrun</p>
        <p>Ejemplo 2: {hola2()}</p>

        <h2>Capturando datos de entrada</h2>
        <p>Los valores utilizados por las funciones pueden ser literales o obtenidos en el DOM. Para ello utilizamos inputs y los manejamos con state.</p>
        <p>Pasos a seguir</p>
        <ul>
            <li>Declarar la variable de estado que monitorea el valor del input</li>
            <li>Agregar la propiedad onChange al input</li>
            <li>Usar event.target.value para actualizar el estado</li>
        </ul>

        <p>campoNombre: {campoNombre}</p>

        {/* -------------------- INPUT NOMBRE -------------------- */}
        <h3>Entrada de datos</h3>
        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='campoNombre'
            name='campoNombre'
            value={campoNombre}
            onChange={gestionaCambio}
        />

        <h4>Mensaje: {campoNombre}</h4>

        <h3>Ejercicios</h3>
        <p>Crear dos campos de entrada y sumar los valores</p>

        {/* -------------------- INPUT 1 -------------------- */}
        <h2>Campo de entrada 1</h2>
        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='numero1'
            name='numero1'
            value={numero1}
            onChange={gestionaCambio}
        />

        {/* -------------------- INPUT 2 -------------------- */}
        <h2>Campo de entrada 2</h2>
        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='numero2'
            name='numero2'
            value={numero2}
            onChange={gestionaCambio}
        />

        {/* -------------------- BOTÓN SUMAR -------------------- */}
        <input
            type='button'
            value="sumar"
            onClick={sumar}
            className='bg-blue-400 p-2 m-4 rounded-xl cursor-pointer'
        />

        {/* -------------------- RESULTADO -------------------- */}
        <h3>Resultado: {resultado}</h3>
    </div>
    );
}
