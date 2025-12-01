import { useState } from "react";

export default function Snipers() {
    
    const [color1, setColor1] = useState("bg-cyan-950");
    
    function cambiarColor1(){
        setColor1("bg-red-300");
    }

    const [color2, setColor2] = useState("bg-cyan-950");

    let flag = true; 
    function cambiarColor2(){
    
        setColor2("bg-red-300");
        if(flag){
            setColor2("bg-cyan-950");
            flag = false;
        } else {
            setColor2("bg-red-300");
            flag = true;
        }
    }

    const [color3, setColor3] = useState("bg-cyan-950");
    const [posicion, setPosicion] = useState(0); 
    

    const [contenidoActivo, setContenidoActivo] = useState(1); 

    function BarraNavegacion(){
        
        
        const handleClick = (id) => {
            setContenidoActivo(id);
        }

        const [opcion, setOpcion ]  = useState (1);


        return(
            <nav className="w-full flex justify-center gap-4 p-4 bg-blue-400 rounded-xl">
                
                
                <button
                    onClick={() => handleClick(1)}
                    className={`
                        text-white p-3 rounded-lg transition-all duration-300
                        ${contenidoActivo === 1 ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500'}
                        max-[700px]:p-2 
                        max-[700px]:text-sm 
                        max-[700px]:translate-x-0 
                    `}
                >
                    Primcipal
                </button>

            
                <button
                    onClick={() => handleClick(2)}
                    className={`
                        text-white p-3 rounded-lg transition-all duration-300
                        ${contenidoActivo === 2 ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500'}
                        max-[700px]:p-2 
                        max-[700px]:text-sm 
                        max-[700px]:translate-x-0 
                    `}
                >
                    titulo Uno
                </button>

                
                <button
                    onClick={() => handleClick(3)}
                    className={`
                        text-white p-3 rounded-lg transition-all duration-300
                        ${contenidoActivo === 3 ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500'}
                        max-[700px]:p-2 
                        max-[700px]:text-sm 
                        max-[700px]:translate-x-0 
                    `}
                >
                    titulo Dos
                </button>

            </nav>
        )
    }
    
    function Contenidonav1(){
        return(
            <>
                <h2>Título Principal</h2>
                <p>Este es el contenido por defecto del primer botón.</p>
            </>
        )   
    }

    function Contenidonav2(){
        return(
            <>
                <h2>Título Uno</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium aperiam, sint et sed praesentium. Odit, dolor ipsam. Nemo eum at illum aspernatur esse laborum ex culpa non veritatis ad.</p>
            </>
        )   
    }

    function Contenidonav3(){
        return(
            <>
                <h2>Título Dos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dicta ea qui dolorum sapiente vero necessitatibus saepe, cupiditate a corrupti officia non praesentium ab suscipit velit eaque sequi natus quaerat.</p>
            </>
        )   
    }

    function Contenidonav4(){
        return(
            <>
                <h2>Título 3</h2>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorem amet rerum porro rem sapiente? Aspernatur molestias consequatur, blanditiis vero nam aperiam qui fuga modi unde autem fugit accusamus optio.</p>
            </>
        )   
    }

    
    const renderContenido = () => {
        switch (contenidoActivo) {
            case 1:
                return <Contenidonav1 />;
            case 2:
                return <Contenidonav2 />;
            case 3:
                return <Contenidonav4 />; 
            default:
                return <Contenidonav1 />;
        }
    }


    return (
        <div id="contenedorprimcipal">
            <div id="contenido">
                <section id="snipers"/>
                <h2>Modificando el DOOM con JS</h2>


                <div id="ejemplo-1">
                    <div id="elementoEjemplo-1" className={"w-80 h-50 " + color1}></div>
                    <button onClick={cambiarColor1} className="bg-blue-400 p-2 m-4 rounded-xl cursor-pointer">
                        Cambiar color
                    </button>
                </div>

                
                <div id="ejemplo2" className={"w-80 h-50 " + color2}>
                    <div id="elementoEjemplo2" className="w-30 h-20"></div>
                    <button onClick={cambiarColor2}>Intercambia color</button>
                </div>

                
                <div id="ejemplo3">
                    <div id="elementoEjemplo3" className={'w-30 h-20 ' + color3}></div>
                    <div id="botonera" className="flex flex-wrap gap-4 m-4">
                        <button className="bg-red-200" onClick={() => setColor3("bg-red-500")}>Rojo</button> 
                        <button className="bg-blue-500" onClick={() => setColor3("bg-blue-500")}>Azul</button>
                        <button className="bg-green-500" onClick={() => setColor3("bg-green-500")}>Verde</button>
                    </div>
                </div>

                <div id="ejemplo-4">
                    <div id="elementoejemplo4" className="w-80 h-50 bg-cyan-700"
                        style={{transform: `translateX(${posicion}%)`}}>
                    </div>
                    <input type="range" min="1" max={100} value={posicion} onChange={(e) => setPosicion(e.target.value)}/>
                    <p>Valor del rango: {posicion}</p>
                </div>

                <hr />

                <h2>Barra de navegación</h2>

                <div id="contenedor-nav"
                    className="m-4 flex flex-col gap-4
                    /* Eliminado el selector [&>buton]:transition-transform ya que estaba mal escrito y no era necesario */
                    max-[700px]:flex-row
                    max-[700px]:gap-2
                    max-[700px]:bg-gray-200
                    max-[700px]:p-2"
                >
                    <BarraNavegacion />
                </div>
                
                <div id="contenido-dinamico" className="mt-4 p-4 border border-gray-300 rounded-lg">
                    {renderContenido()}
                </div>

                

            </div>
        </div>
    )
}