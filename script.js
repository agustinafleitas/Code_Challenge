const formulario= document.getElementById("formulario")

formulario.addEventListener("submit", function(e){ //Evento del botón
    e.preventDefault();
    EnviarDatos(); //Llamar a la función EnviarDatos (fetch) cuando se envía el formulario
})


function EnviarDatos() {  
    //Los valores de los campos de entrada (nombre, apellido y fecha)
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;
    const formData= { //Objeto que almacena los valores obtenidos del formulario 
        Nombre:nombre,
        Apellido:apellido,
        Fecha:fecha
    };

    fetch ("https://jsonplaceholder.typicode.com/users", { //En esta línea comienzo con "fetch". Indico el método y el lugar donde se enviaran los datos (URL)
    method:'POST',
    headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData) //Conviertes el objeto "formData" en una cadena JSON 
})
.then (res => res.json()) //Convierte la respuesta en un JSON
.then (data =>{ //Toma el objeto JSON y lo muestra en al consola con "console.log(data)"
    console.log(data) 
})
}