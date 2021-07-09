                        //clase2

//prueba de clase
let estacion = prompt(`En que estación estamos? verano o invierno?`);
let estacionVer = estacion.toLowerCase();

if (estacionVer == `invierno`) {
    console.log(`Hace frio, me pongo un buzo`);
} else if(estacionVer == `verano`) {
    console.log(`Hace calor, me pongo solo un remera`);
} else{
    console.log(`salí afuera porque no se como está`);
};

//ejercicio de clase
let numero1 = Number(prompt(`ingrese el primer numero a multiplicar`));
let numero2 = Number(prompt(`ingrese el segundo numero a multiplicar`));

let multi = numero1 * numero2;

if (multi > 100) {
    console.log(`mayor a 100, el resultado ${multi}`);
} else if (multi < 100) {
    console.log(`menor a 100, el resultado ${multi}`);
} else {
    console.log(`igual a 100`);
};

// operadores && - ||
let nombre = prompt(`dime tu nombre`);
let nombreVer = nombre.toLowerCase();
let edad = Number(prompt(`dime tu edad`));
let password = Number(prompt(`ingrese su password`));
let ingreso = confirm(`desea ingresar?`);

let error = `error`;

if (ingreso == true) {
    if (nombreVer == `maxi` && edad >= 18 && password == 1234) {
        console.log(`ya ingresaste`);
    } else {
        console.log(error);
    }
} else {
    console.log(`No querés entrar!`);
}

//calculadora
let a = Number(prompt(`ingrese su primer número`));
let operador = prompt(`ingrese un operador matemático`);
let b = Number(prompt(`ingrese su segundo número`));

if (isNaN(a) || isNaN(b)) {
    alert(`alguno de sus datos no es un número`);
    a = Number(prompt(`ingrese su primer número`));
    b = Number(prompt(`ingrese su segundo número`));
}

const suma = a+b;
const resta = a-b;
const multip = a*b;
const div = a/b;
let resultado = 0;

if (operador == "+") {
    console.log(`${a}${operador}${b} = ${suma}`);
} else if(operador == "-") {
    console.log(`${a}${operador}${b} = ${resta}`);
} else if (operador == "*") {
    console.log(`${a}${operador}${b} = ${multip}`);
} else if(operador == "/"){
    console.log(`${a}${operador}${b} = ${div}`);
} else{
    console.log(`disculpe, esta calculadora no reconoce el operador ingresado`);
};