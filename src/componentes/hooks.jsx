import { useState } from "react";


//componente 
import FuncionUsestate from "./usestate";

export default function Hooks (){

    const [nombre, setNombre] = useState ("Levi");
    return(
        <div className="contenido {&>p}: m-4 {&>h2}: text-2xl font-bold {&>h3}: text-xl font-semibold space-y-2 ">

        <h2>Titulo</h2>
        <p>los ganchoa permiten a os componentes funcionales acceder a al etado y a otra propiedades sin la itulizacion de clases. <br></br> Proven una api mas directa a conceptos de reac como proops, states, context entre otros. </p>
        <p>Son en difinitia funciones que permiten "Enganchar a" Propiedades de reac desde componentes funcionales </p>
        <div className=" m-2 p-5 border-2 border-blue-400 circular-lg space-y-14">
            <h3>Tipos de Hooks</h3>
            <p>Hola mi nombre es: {nombre}</p>
            <button onClick={ () => setNombre ("Juan") } className="bg-blue-500 decoration-indigo-900">Cambiar Nombre</button>
        </div>
        <p>Se deven importar los hooks desde reac, en el ejemeplo aanterior usamos el hook usestate para tener un seguimiento del aapp. <br></br>Los estads generalmente se refieren a datos o propiedades de la app que nesesitan ser monitoriados </p>
        <h2>Reglas de Hooks</h2>
        <p>Hay 3 reglas para los hooks:</p>
        <p>1. Solo se pueden llamar hooks en el nivel superior de un componente funcional o en otros hooks personalizados. No se pueden llamar dentro de bucles, condicionales o funciones anidadas. </p>
        <p>2. Solo se pueden llamar hooks desde componentes funcionales de reac o desde hooks personalizados. No se pueden llamar desde funciones normales de javascript. </p>
        <p>3. Los nombres de los hooks deben comenzar con la palabra "use" para que reac pueda identificar que es un hook. </p>
        <h2>Hooks Comunes</h2>
        <p>Algunos hooks comunes incluyen:</p>
        <p>useState: Permite agregar estado local a componentes funcionales. </p>
        <p>useEffect: Permite realizar efectos secundarios en componentes funcionales, como llamadas a API o suscripciones a eventos. </p>
        <p>useContext: Permite acceder al contexto de reac desde componentes funcionales. </p>
        <p>useRef: Permite crear referencias mutables que persisten durante todo el ciclo de vida del componente.
        </p>
        <FuncionUsestate />
        
        </div>

    )
}