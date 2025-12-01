import { useState } from "react";


export default function Snipers() {
    const [color1, setColor1] = useState("bg-cyan-950");
    
    function cambiarColor1(){
        setColor1("bg-red-300");
    }
    const [color2, setColor2] = useState("bg-cyan-950");
    let flag = true
    function cambiarColor2(){
        setColor2("bg-red-300");
        if(flag){
            setColor2("bg-cyan-950");
            flag = false
        }else{
            setColor2("bg-red-300");
            flag = true
        }
    }
    const [color3, setColor3] = useState("bg-cyan-950");

    const [posicion, setPosicion] = useState(0); 
    
    function barraNavegacion(){
        return(
            <>
                <button className="bg-blue-400 p-2 m-4 rounded-xl cursor-pointer">Inicio</button>

            </>
        )
    }

    return (
        <div id="contenedorprimcipal">
            <div id="contenido">
                <section id="snipers"/>
                    <h2>Modificando el DOOM con JS</h2>
                    <p>Utilizando las funciones useEfec, useRef y useState podemos modificar diferentes aspectos del DOOM como contenido de algun elemento HTML o incluso cambiar nombres de clases para lograr diferentes efectos </p>
                    <div id="ejemplo-1">
                        <div id="elementoEjemplo-1 " className={"w-80 h-50 " + color1}>

                        </div>
                        <button onClick={cambiarColor1}  className="bg-blue-400 p-2 m-4 rounded-xl cursor-pointer">Cambiar color</button>
                    </div>
                        <div id="ejemplo2" className={"w-80 h-50 " + color2}>
                            <div id="elementoEjemplo2" className="w-30 h-20" ></div>
                            <button onClick={cambiarColor2}>Intercambia color</button>
                            </div>
                    <div id ="ejemplo3">
                        <div id="elementoEjemplo3" className={'w-30 h-20 ' + color3} style={{backgroundColor: color3}}></div>
                        <div  id="botonera" className="flex flex-wrap gap-4 m-4">

                            <button className="bg-red-200"  onClick={() => setColor3("red")}>cambiar a rojo</button>
                            <button className="bg-blue-500" onClick={() => setColor3("blue")}>cambiar a azul</button>
                            <button  className="bg-gren-500" onClick={() => setColor3("green")}>cambiar a verde</button>
                            </div>
                        </div>
                            <div id="ejemplo-4">
                                <div id="elementoejemplo4" className="w-80 h-50 bg-cyan-700" style={{transform: `translateX(${posicion}%)`}}>
                                    
                                </div>
                                <input type="range" min="1" max={100} defaultValue={posicion} onChange={(e) => setPosicion(e.target.value)}/>
                                <p >Valor del rango: {posicion} </p>
                                
                            </div>
                    <hr>
                        <section id="snipers"/>
                        <h2>barra de navegacion</h2>
                        <div id="contenedor-nav" className="flex flex-wrap gap-4 m-4">
                            {barraNavegacion()}
                        </div>
                    </hr>

            </div>
            
        </div>
    )
}