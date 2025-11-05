export default function Objetos (){
   /* //El objeto literal es almacenado en la variable taza
    //Todos los objetos arrays Listas y demas estructuras similares deben ser variables del tipo conts
    const taza = {material: "ceramico", color:"rojo", volumen:230 };
    //Otra manera de escribitr los objetos es usando un formatode lista, este mejora la legibilidad del codigo al utilizar objetos con muchos atributos

    const auto = {
        marca:"renault",
        modelo:"R19",
        color:"bordeuos",
        kilometraje:2000000,
        patente:"wan 173",
        anio:2001,
    };

    
    //Es posible crear un objeto vaciuo y luego agregarle las propiedades

    const persona ={};
    persona.nombre = "ricardo";
    persona.apellido = "fort";
    persona.edad = 40;
    persona.altura = 1.70;
    //Podemos acceder a los atributos de los objetos de dos maneras
    
    console.log(persona.nombre);

    console.log(auto["marca"]);

    //Metodos
    const perro = {
        raza: "labrador",
        nombre: "Guido",
        edad: 8,
        ladra: function(){
            console.log("guaf guaf");
        },

        info: function(){
            return "raza: " + this.raza + " \n" + "nombre: " + this.nombre + "\n" + "edad: " + this.edad + " años"
        }
    };

    //Imvocamos al metodo ladra de las misma manera que las propiedades

    perro.ladra();
    var infoPerro = perro.info();
    console.log(infoPerro);

    const ciudad = {
        nombre:"Moron",
        provincia: "Buenos Aires",
        habitantes: 5000000,
        partido: "La Matanza",
        intendente: "Cahanta De Turno",
    }

    var texto = " la ciudad de  " + ciudad.nombre + " se encuentra en la provincia de " + ciudad.provincia + ", Tiene una poblacion de " + ciudad.habitantes + " Habitantes";
    document.getElementById("imformacion").innerHTML = texto; */
    return (
        <>
        <div className="seccionobjetos">
        <div>
            <h2>Objetos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium, eligendi error hic at esse optio quaerat quisquam <br></br>fugit labore expedita? Corrupti consectetur quisquam quidem quod obcaecati numquam, facilis id?</p>
            <h3>Objeto literal</h3>
            <div>
                &#123;material: "ceramico", color:"rojo", volumen 20&#125;;
            </div>
            <p>El ejemplo anterio representa un objeto literanl, esta encerrado entre llaves y sus pares llave/valor estan separados por una coma(,)</p>
            <p>Ver ejemplos en el codigo fuente</p>
            <h3>Metodos de los objetos</h3>
            <p>Si los atributos son los que identifican a los objetos, los metodos decriben su conportamiento. Son las acciones que este objetos va a realizar<br></br> Los metodos para javaScript son funciones almacenadas como valores de las propiedades</p>
            <p>Ver ejemplo en codigo fuente</p>
            <h3>Mostrando las propiedades</h3>
            <p>Para mostar los valores de las propiedades de nuestros objetos podemos utilizar el metodo docment.getElementById("") </p>
            <p id="imformacion"></p>
            
        </div>
        </div>
        </>
    )
}