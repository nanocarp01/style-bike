var nombre = String;

function ingresar() {
    nombre = prompt('Ingrese su nombre');
}

while (sessionStorage.length == 0 && nombre.length != 0) {


    do {
        alert('Ingrese su nombre');
        ingresar();
    }
    while (nombre.length == 0);
    sessionStorage.setItem("nombre", nombre);
}


document.getElementById("nombre").innerHTML = "Hola " + sessionStorage.nombre + " vamos a incursionar en el";
