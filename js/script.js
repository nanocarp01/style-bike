var nombre = String;

function ingresar(string) {
    nombre = prompt('Ingrese su nombre');
}
ingresar();
while (sessionStorage.length == 0 && nombre.length != null) {
    
    do {
        alert('Ingrese su nombre');
        ingresar();
    }
    while (nombre.length == "");

    sessionStorage.setItem("nombre", nombre);
}

document.getElementById("nombre").innerHTML = "Hola " + sessionStorage.nombre + " vamos a incursionar en el";
