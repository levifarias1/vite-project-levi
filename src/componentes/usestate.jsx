export default function FuncionUsestate (){

    return(
        <div className="contenido {&>p}: m-4 {&>h2}: text-2xl font-bold {&>h3}: text-xl font-semibold space-y-2">
            <h2 className="underline p-2.5 ">Hook UseState</h2>
            <p>Este hook se utiliza para mantener un seguimineto del estado que nesesitan ser monitoriados</p>
            <p>El primer paso es importarlo desde reac import (useState)from 'reac' </p>
            <p>LUego unicializamos nuestro estado invocando a useState en nuestro componente funcional. useStae acepta un estado inicial y retorna dos valores.
                <ul>
                    <li>El estado actual</li>
                    <li>Una funcion que actulaiza el estado</li>
                </ul>
            </p>
            <h2>Ejemplo</h2>

            <code>
import { useState } from "react";

export default function ComponenteEjemplo (){

    const [color, setColor] = useState ("rojo");
    
    return( 
        <>
            <h3>El color es: {color} </h3>
            <button onClick={ () => setColor ("azul") }>Cambiar Color</button>
        </>
    )
}   
            </code>
    <p>El primer valor es el color </p>
        </div>
    )
}
