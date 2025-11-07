//Componentes
import FormularioFinal from "./formularioFinal"

export default function Formulario (){
    return(
        <>
        <h2 className="m-2 bg-blue-200 text-3xl font-bold underline ">Formularios</h2>
        <p className="m-2">Los formularios HTMl se utilizan para recolectar entradas del usuario. Esta info recolectada se emviara a unservidor externo para ser procesado,<br></br> aunque odemos utilizar funcionesde js para modificar contenido del DOM </p>
        <div>
            <p>Ejmemplo</p>
            <form className="m-2 p-2 border-2 border-blue-400 bg-blue-100">
                <label className="m-2 p-2">Nombre:
                    <input type="text" name="nombre" className="m-2 p-2 border-2 border-blue-400"/>
                </label>
                <br></br>
                <label className="m-2 p-2">Apellido:
                    <input type="text" name="apellido" className="m-2 p-2 border-2 border-blue-400"/>
                </label>
                <br></br>
                <input type="submit" value="Enviar" className="m-2 p-2 border-2 border-blue-400 bg-blue-300 hover:bg-blue-500 cursor-pointer"/>
                
            </form>
        </div>
        <h2 className="m-2 bg-blue-200 text-3xl font-bold underline ">El elemento &lt;form &gt; </h2>
                <p className="m-4">Este es un elemento contenedor para diferentes tipos de elementos de antrada, tales como: Campos de texto, Chetboxes, Botones radius, Botonoes de envio, ETC</p>
                <h2 className="m-2 bg-blue-200 text-3xl font-bold underline ">El elemento &lt;input&gt;</h2>
                <p className="m-4">Este elemento es el mas utilizado en un formulario. Puede mostrarse de diversas maneras dependiendo de su atributo type</p>
                <table className="m-4 border-2 border-blue-400 ">
                    <tr>
                        <th className="border-2 border-blue-400 p-2 m-2">Tipo</th>
                        <th className="border-2 border-blue-400 p-2 m-2">Descripcion</th>
                        
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">text</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea un campo de texto de una sola linea</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">password</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea un campo de texto en el que los caracteres introducidos se ocultan</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">checkbox</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea una casilla que puede ser marcada o desmarcada</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">radio</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea un boton de opcion, que permite seleccionar una opcion entre varias</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">submit</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea un boton que envia el formulario</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-blue-400 p-2 m-2">reset</td>
                        <td className="border-2 border-blue-400 p-2 m-2">Crea un boton que restablece los valores del formulario a sus valores predeterminados</td>
                    </tr>
                </table>
                <h2 className="underline">Elemento &lt;label&gt;</h2>
                <p>El elemento labes define una etiqueta para muchos elementos de formulario. Es muy util para los usuarios con lector de pantalla ya que este sera leido cuando el usuario enfoca el elemento de entrada </p>
                <p>Este elemento tambien ayuda a usuarios que tienen dificultad clickeando en regiones muy pequeñas tales como (Botones radio o checkkboxes) Por que cuando el usuario clikea el texto dentro del &lt;label&gt; actica dichos botones</p>
                <p>Tambien podemos utilizar un atributo llamado for para emparejar un elemento de entrada con la etiqueta para hacerlo el id de la entrada debe coincidir con el for del label </p>
                
                <div>
                <h3 className="m-2 bg-blue-200 text-3xl font-bold underline ">Ejemplo radio</h3>
                <div className="botones-radio">
                    <form>
                        <input type="radio" id="html" name="leng fav" value="html" className="m-2 p-2"/>
                        <label for="html">HTML</label><br></br>
                        <input type="radio" id="css" name="lang fav" value="css" className="m-2 p-2"/>
                        <label for="css">CSS</label><br></br>
                        <input type="radio" id="JavaScript" name="leng fav" value="JavaScript" className="m-2 p-2"/>
                        <label for="JavaScript">JavaScript</label><br></br>
                        <input type="submit" value="Enviar" className="m-2 p-2 border-2 border-blue-400 bg-blue-300 hover:bg-blue-500 cursor-pointer"/>
                    </form>
                    <div>
                        <h3 className="m-2 bg-blue-200 text-3xl font-bold underline ">Ejemplo checkbox</h3>
                        <input type="checkbox" id="vehiculo1" name="vehiculo1" value="moto" className="m-2 p-2"></input>
                        <label for="vehiculo1">Tengo una moto</label>
                        <br></br>
                        <input type="checkbox" id="vehiculo2" name="vehiculo2" value="auto" className="m-2 p-2"></input>
                        <label for="vehiculo2" >Tengo un auto</label>
                        <br></br>
                        <input type="checkbox" id="vehiculo3" name="vehiculo3" value="bicicleta" className="m-2 p-2"></input>
                        <label for="vehiculo3">Tengo una bicicleta</label>
                    </div>
                </div>
                </div>
        <FormularioFinal></FormularioFinal>
        </>
    
    )
}