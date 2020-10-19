var nombre = String;

function ingresar(string) {
    nombre = prompt('Ingrese su nombre');
}

while (sessionStorage.length == 0) {
    
ingresar();
    sessionStorage.setItem("nombre", nombre);
     do {
        alert('Ingrese su nombre');
        ingresar();
    }
    while (nombre.length == "");
}

document.getElementById("nombre").innerHTML = "Hola " + sessionStorage.nombre + " vamos a incursionar en el";
