/*
Codo a codo
Full Stack Java
Comisión 24115
Grupo 23
Trabajo Práctico Final Front End

Fecha: 25/04/24
Última actalización: 03/06/24

*Página de inicio bienvenida y validación de acceso a la página principal por formulario
*/

/// Validacíon del formulario de registro y acceso a la página principal

document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    var dato1 = document.getElementById("correo").value; // Obtiene el valor del input
    var dato2 = document.getElementById("clave").value
    if (dato1 == "" || dato2 ==""){
        var mensaje = "*Completar campos obligatorios";
        var mensajeElement = document.getElementById("cartel");
        mensajeElement.textContent = mensaje;
    } else{
        window.location.href = "inicio.html";

    }
  
})



