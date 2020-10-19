"use strict";

/*if (sessionStorage.length == 0) {
    let nombre = prompt('Ingrese su nombre');
    sessionStorage.setItem("nombre", nombre);
}*/
var nombre = String;

function ingresar() {
  nombre = prompt('Ingrese su nombre');
}

ingresar();
/*if (nombre.length == 0 && sessionStorage.length == 0) {
    alert('Ingrese su nombre');
    pregunta();
}

if (nombre.length != 0 || sessionStorage.length == 0) {
    sessionStorage.setItem("nombre", nombre);
}*/

do {
  alert('Ingrese su nombre');
  ingresar();
} while (nombre.length == "" && sessionStorage.length == 0);

document.getElementById("nombre").innerHTML = "Hola " + sessionStorage.nombre + " vamos a incursionar en el";