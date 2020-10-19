/*if (sessionStorage.length == 0) {
    let nombre = prompt('Ingrese su nombre');
    sessionStorage.setItem("nombre", nombre);
}*/

/*while (sessionStorage.length == 0 && nombre.length != null) {
    ingresar();
    if (nombre.length == "") {
        alert('Ingrese su nombre');
        ingresar();
    }
    sessionStorage.setItem("nombre", nombre);


}*/
var nombre = String;

function ingresar(string) {
    nombre = prompt('Ingrese su nombre');
}

while (sessionStorage.length == 0 && nombre.length != null) {
    ingresar();
    do {
        alert('Ingrese su nombre');
        ingresar();
    }
    while (nombre.length == "");

    sessionStorage.setItem("nombre", nombre);
}

document.getElementById("nombre").innerHTML = "Hola " + sessionStorage.nombre + " vamos a incursionar en el";