//Componentes
import Formulario from "./formulario"

export default function FormularioFinal (){

    return(
        <>
<h2 className="m-4 bg-green-200 text-3xl font-bold underline text-center rounded-lg p-2">
    Pruebas Componentes
</h2>

<p className="p-2 text-center text-lg">Este es un componente de pruebas</p>

<div className="formulario max-w-7xl mx-auto bg-cyan-800 p-6 m-4 rounded-lg shadow-lg text-white">
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    {/* Nombre */}
    <div>
        <label htmlFor="fnombre" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Nombre
        </label>
        <input
        type="text"
        id="fnombre"
        name="fnombre"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Apellido */}
    <div>
        <label htmlFor="fapellido" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Apellido
        </label>
        <input
        type="text"
        id="fapellido"
        name="fapellido"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* DNI */}
    <div>
        <label htmlFor="dni" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        D.N.I
        </label>
        <input
        type="text"
        id="dni"
        name="dni"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Número de Trámite */}
    <div>
        <label htmlFor="numeroDeTramite" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Número de Trámite
        </label>
        <input
        type="text"
        id="numeroDeTramite"
        name="numeroDeTramite"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Nacionalidad */}
    <div>
        <label htmlFor="nacionalidad" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Nacionalidad
        </label>
        <input
        type="text"
        id="nacionalidad"
        name="nacionalidad"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Fecha de Nacimiento */}
    <div>
        <label htmlFor="fnacimiento" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Fecha de Nacimiento
        </label>
        <input
        type="date"
        id="fnacimiento"
        name="fnacimiento"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Email */}
    <div>
        <label htmlFor="femail" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Email
        </label>
        <input
        type="email"
        id="femail"
        name="femail"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Password */}
    <div>
        <label htmlFor="fpassword" className="block mb-1 bg-sky-200 text-black p-1 rounded">
        Password
        </label>
        <input
        type="password"
        id="fpassword"
        name="fpassword"
        className="w-full p-2 border-2 border-green-400 rounded text-black"/>
    </div>

    {/* Botón Enviar */}
    <div className="col-span-1 sm:col-span-2 text-center mt-4">
        <input
        type="submit"
        value="Enviar"
        className="px-6 py-2 border-2 border-green-400 bg-green-300 hover:bg-green-500 rounded cursor-pointer text-black font-semibold"/>
    </div>
</form>
</div>

        <div>
        <p>Estudios</p>
        <form>
            <input type="checkbox" id="estudio1" name="estudio1" value="primario" className="m-2 p-2"></input>
            <label for="estudio1">Primario</label>
            <input type="checkbox" id="estudio2" name="estudio2" value="secundario" className="m-2 p-2"></input>
            <label for="estudio2">Secundario</label>
            <input type="checkbox" id="estudio3" name="estudio3" value="terciario" className="m-2 p-2"></input>
            <label for="estudio3">Terciario</label>
            <input type="checkbox" id="estudio4" name="estudio4" value="universitario" className="m-2 p-2"></input>
            <label for="estudio4">Universitario</label>
        </form>
        </div>
        </>
    )
}