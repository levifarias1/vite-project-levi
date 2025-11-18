//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { useState } from 'react'

//Estilos
import './CSS/general.css'

//Componemtes

const raiz = document.getElementById('root');

function Cabecera(){
    return(
        <header className='bg-blue-300 text-center p-1 m-4 rounded-xl'>
            <h1>Ejersicios funciones</h1>
        </header>
    )
}

function Contenido() {
    const [campoNombre, setCampoNombre] = useState(0);
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
}


    const gestionaCambio = (event) => {
const gestionaCambio = (event) => {
    const { name, value } = event.target;

    if (name === "campoNombre") setCampoNombre(value);
    if (name === "numero1") setNumero1(value);
    if (name === "numero2") setNumero2(value);
    };

  // 💡 Corrección: Definición de función flecha normal
  const funcioSUmar = (nu1, n2) => nu1 + n2;
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
        <p>Mostrar la  de dos numeros: {Ejersicio2(12, 2)}</p>
        <p>Mostrar la multiplicaion de dos numeros: {Ejersicio3(3,3)}</p>
        <h2>Funciones flecha</h2>
        <p>Otra manera de utilizar las funciones es definirlas como varialbes: letMifuncion = function (a,b) &#123;return a * b&#125;;</p>
        <p>Esta funcion devuelve el promedio de cuatro numeros: {promedio(5,6,8,500)}</p>
        <p>Con las funciones flecha podemos expresar estas funciones de manera mas corta: let miFuncion = (a,b) =&gt; </p>
        <p>Esta funcion devuelve el promedio de tres numeros: {miFuncionPromedio3(5,6,7)}</p>
        <p>De esta manera podemos simplificar la sintaxis omitiendo lapalabra clave fuction, retrun y las llaves</p>
        <p>funcion hola: {hola}</p>
        <p>SI la funcion solo tiene una sentecncia como valor ed retorno podemos remover las llaves y el retrun</p>
        <p>Ejemplo 2: {hola2()}</p>

        <h2>Capturando datos de entrada</h2>
        <p>los valores utilizados por las funciones pueden ser literales (Escritos en el codigo) o obtenidos en el dom (Ej): un inoutbox. Para ello utilizamos </p>
        <p>Pasos a seguir
            <ul>
                <li>Declarar la variable de estado de monitoreo el valor de entrada para el imut</li>
                <li>Agregar la propiedad onChange al campo de entrada</li>
                <li>Utilizar event.target.value para obtener el valor del campo de entrada y actualizar la variable de estado</li>
                campoNombre: {campoNombre}
            </ul>
        </p>

        <h3>Enrtada de datos </h3>

        
        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='campoNombre'
            name='campoNombre'
            value={campoNombre}
            onChange={gestionaCambio}
        />

        <h4>Mensaje: {campoNombre}</h4>

        <p>Utilizamos el hooks state para monitorear el valor del campo de entrada, establecemos la propiedad onchange del campo para que cada ves que su valor cambie se imvoque a la funcion gestionaCampo...</p>

        <h3>Ejersicios</h3>
        <p>Crear dos campos de entrada</p>

        <h2>Campo de entrada 1</h2>

        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='numero1'
            name='numero1'
            value={numero1}
            onChange={gestionaCambio}
        />

        <h2>Campo de entrada 2</h2>

        
        <input 
            className='border-b-cyan-700 m-4 bg-teal-600'
            type='text'
            id='numero2'
            name='numero2'
            value={numero2}
            onChange={gestionaCambio}
        />
        <input
        type='button'
        value="sumar"
        />
    </div>
);
}


function Mifuncion(){
    return(
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
}   
function Ejemplo2(nombre){
    return "Hola mi nombre es: " + nombre;         
}   
function Ejemplo3(n1, n2){
    return n1 + n2;
}
function Ejersicio1(n1, n2){
    return n1 - n2;
}
function Ejersicio2(n1, n2){
    return n1 / n2;
}
function Ejersicio3(n1, n2){
    return n1 * n2;
}
let promedio = function (n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4) / 4;    
}
let hola  = () => {
    return "Hola mundo";
}
let hola2 = () => "Hola mundo";
let miFuncionPromedio3 = (a, b, c) => (a + b + c) / 3;

createRoot(raiz).render(
<StrictMode>
    <Cabecera />
    <Cabecera />
    <Contenido />
    <Mifuncion />
    <h2>Alohaa</h2>
</StrictMode>
);
