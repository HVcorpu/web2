
/*
Codo a codo
Full Stack Java
Comisión 24115
Grupo 23
Trabajo Práctico Final Front End

Fecha: 27/05/24
Última actalización: 03/06/24

*Página para el uso de la Api openweathermap y la utlizacion en el archivo recomendaciones.html
*/

clima = document.getElementById("clima")

clima.addEventListener('click',function(){
    obtenerDatos();
})

function obtenerDatos() {
    console.log("diste click");
    var seleccion = document.getElementById("provincia");
    var ubicacion = seleccion.value
    //al final de la url después del signo igual = poner la key provista por openweather
    let url ='http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,AR&lang=es&units=metric&appid=51dcfa8eccedea39e45acbe804fb55ed';

    // instancio peticion 
    const api = new XMLHttpRequest();
    // le paso el metodo 
    api.open('GET',url,true);
    api.send();
    Itemperatura = 0;
    Iviento = 0;
    Ihumedad = 0;


    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
            // vamos a poner el contenido del body en un json 

            let respuesta = JSON.parse(this.responseText)
            var clima = respuesta["weather"][0]["main"];// es un array de json, en la posicion 0 del array acceso a las filas
            var descripcion=respuesta["weather"][0]["description"];
            var temperatura =respuesta["main"]["temp"];
            var temperatura_minima = respuesta["main"]["temp_min"];
            var temperatura_maxima = respuesta["main"]["temp_max"];
            var humedad = respuesta["main"]["humidity"];
            var viento = respuesta["wind"]["speed"];

            Itemperatura = Number(temperatura);
            Iviento = Number(viento);
            Ihumedad = Number(humedad);

            var mensajeElement = document.getElementById("descripcion");
            mensajeElement.textContent = "Descripción del cielo: "+ descripcion;

            var mensajeElement = document.getElementById("temperatura");
            mensajeElement.textContent = "Temperatura actual: "+ temperatura + "°C";
            
            var mensajeElement = document.getElementById("tempmin");
            mensajeElement.textContent = "Temperatura mínima:"+ temperatura_minima + "°C";

            var mensajeElement = document.getElementById("tempmax");
            mensajeElement.textContent = "Temperatura máxima:"+ temperatura_maxima + "°C";

            var mensajeElement = document.getElementById("vientos");
            mensajeElement.textContent = "velocidad del viento: "+ viento + "Km/h";
            
            var mensajeElement = document.getElementById("humedad");
            mensajeElement.textContent = "Humedad: " + humedad + "%";


            if (Itemperatura<10){
                var mensajeElement = document.getElementById("ptemperatura");
                mensajeElement.textContent = "Protege los cultivos en invernaderos, cubre con telas antiheladadas, siembra plantas resistentes a las heladas y riega menos.";
            }
            
            if (Itemperatura>=10 && Itemperatura<= 15){
                var mensajeElement = document.getElementById("ptemperatura");
                mensajeElement.textContent = "Protege con tela antihelada a plantas jovenes y sensibles al frio, evita cultivos sensibles al frio y siembra en invernadero.";
            }
            
            if (Itemperatura>15 && Itemperatura<=25){
                var mensajeElement = document.getElementById("ptemperatura");
                mensajeElement.textContent = "Controla el riego, evita cultivos que esten fuera del calendario de siembra, usa coberturas para controlar las horas de sol y aprovecha la siembra de plantas frutales.";
            }
            
            if (Itemperatura>25){
                var mensajeElement = document.getElementById("ptemperatura");
                mensajeElement.textContent = "Usa cobertura para controlar las horas de sol, riega frecuentemente y evita sembrar espinacas y guisantes.";
            }
            
            
            
            
            
            if (Iviento<20){
                var mensajeElement = document.getElementById("pvientos");
                mensajeElement.textContent = "Vientos leves: tareas normales en el huerto.";
            }
            
            if (Iviento>20 && Iviento<28){
                var mensajeElement = document.getElementById("pvientos");
                mensajeElement.textContent = "Vientos moderados: Proteger plantas jovenes, tutorar plantas altas y/o trepadoras y asegurar el riego para evitar deshidratación.";
            }
            
            if (Iviento>=28 && Iviento <=38){
                var mensajeElement = document.getElementById("pvientos");
                mensajeElement.textContent = "Vientos intensos: Utilizar cortavientos naturales o artificiales, puedes practicar la cocecha anticipada. Asegura estructuras como invernaderos, macetas colgantes, túneles y tutore. Tutorar plantas trepadoras y colgantes.";
            }
            
            if (Iviento >38){
                var mensajeElement = document.getElementById("pvientos");
                mensajeElement.textContent =  "Vientos violentos: Realizar un monitoreo constante del huerto, realizar controles sobre árboles añejos y de gran tamaño, podar árboles para la resistencia al viento, asegura estructuras como invernaderos, tuneles, tutores, macetas, carteles y materiales de construcción como chapas y cercas.";
            }
            
            
            
            if ( Ihumedad<20){
                var mensajeElement = document.getElementById("phumedad");
                mensajeElement.textContent =  "Riegar frecuentemente u opta por sistemas de riego, elige plantas que sean resistentes a la sequia y utiliza mejoradores de suelo.";          
            }
            
            if ( Ihumedad>=20 && Ihumedad<=40){
                var mensajeElement = document.getElementById("phumedad");
                mensajeElement.textContent =  "Opta por cultivos que toleren la sequia y riega frecuentemente los cultivos.";
            }
            
            if ( Ihumedad>40 && Ihumedad<70){
                var mensajeElement = document.getElementById("phumedad");
                mensajeElement.textContent =  "Optar por cultivos resistentes al frio y la humedad, evitar execeso de riego y usa mantillo.";  
            }
            
            if ( Ihumedad>=70){
                var mensajeElement = document.getElementById("phumedad");
                mensajeElement.textContent =  "Riega menos, cultiva vegetales de hojas verdes y monitorea el drenaje del suelo.";
            }
        }
    }
}
