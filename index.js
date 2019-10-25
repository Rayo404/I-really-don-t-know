alert("Bienvenidos a mi sitio");
var nice = false;
var mensaje;
var edad= prompt("Que edad tienes?");

if (edad>=12) {
    mensaje= "Bienvenido a mi sitio";
} else if(edad>10&& edad <12) {
    mensaje= "O H   N O";
} else {
    mensaje= "N O";
}

alert(mensaje);

