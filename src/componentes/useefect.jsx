import { useEffect, useState } from "react";


export default function Useefect (){
    const [cuenta, setCuenta] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCuenta(cuenta => cuenta + 10000000000000);
        }, 1000);
    },[])
    //Ejemplos de use efect
    useEffect(() =>{
        //Corre en cada renderizado
    });
    useEffect(() =>{
        //Corre solo en el primer render
    },[]);

    let propiedades, estados;
    useEffect(() =>{
        //Corre en el primer render, 
        // y cada ves que el valor de propstate cambie
    },[propiedades, estados]);


    return(
        <div className="contenido {&>p}: m-4 {&>h2}: text-2xl font-bold {&>h3}: text-xl font-semibold space-y-2 ">

        <h2>Hook useEffect</h2>
        <p>El hook useEffect en React permite a los componentes funcionales realizar efectos secundarios, como llamadas a API, suscripciones a eventos o manipulaciones del DOM. </p>
        <p>Se importa desde 'react' y se utiliza dentro de un componente funcional. El hook acepta dos argumentos: una función que contiene el efecto secundario y una matriz de dependencias opcional que determina cuándo se debe ejecutar el efecto. </p>
        <p>Si la matriz de dependencias está vacía, el efecto se ejecuta solo una vez después del primer renderizado. Si contiene variables, el efecto se ejecuta cada vez que alguna de esas variables cambia. </p>
        <p>useEffect es útil para manejar tareas asíncronas y sincronizar el estado del componente con fuentes externas. </p>
        <p>Este hook nos permite realizar side efects(Efectos secundarios) que son objetos observables en la pagina </p>
        <p>Algunos ejemplos de side efect son obtencion de datos, actualizaciones directas del done y temporizadores</p>
        <p>use efect acepta dos argumentos, use efect </p>
        <code>&lt;useefect&gt; &lt;useefect&gt; &lt;dependencias&gt;</code>
        <h3>Ejemplo Temporizador</h3>
        <p>Usamos la funcion setTimeout; Para contar un segundo luego del remderizado inicial</p>
        <p>Hola me renderize {cuenta} veces</p>
        <p>Podemos ver que el contador sigue actualizandoce cuando solo deveria sontar una vez, esto se debe a que use efect corre en cada renderizado. Esto significa que cuando el contador cambia, sucede un renderizado, lo que activa otra ves el efecto</p>
        <p>Esto no es lo que qieriamos, hay varias maneras de controlar cuando corres este side efect. </p>
        <p>deveriammos seimrpre incluir el segundo  parametro que acepta un array. Opcionalmente podriamos pasar dependencias al use efect de esta manera</p>
        <h3>Ejemplos En El Codigo</h3>
        <code>

        </code>

        </div>
    )
}