let usuario = prompt("Ingrese su mombre");

while( usuario != ""){
    switch (usuario) {
        case "Mauro":
            alert(`Hola ${usuario}`)
            break;
        default:
            alert("Usuario Incorrecto")
            break;
    }
let usuario = prompt("Ingrese su mombre");
}

let nivel = prompt("Ingrese su nivel de membresia");

if (nivel < 1) {
    alert("No tienes ningun beneficio");
} else if(nivel < 2){
    alert("Tienes 50% off en envios");
}else{
    alert("Tienes 75% off en envios, Disney y StarPlus sin cargo");
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let envio = 5000;
let descuentoEnvio = 2500;
let descuentoClienteFull = 1250;

let total = resta(suma(envio, descuento(descuentoEnvio))); //Descuento del 50%


let total = resta(suma(envio, descuento(descuentoClienteFull))); //Descuento del 75%