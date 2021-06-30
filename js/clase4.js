//variables let
let sofa = " ";
let tela = " ";
let metraje = 0;
let precio = 0;
let precioTela = 0;

//function arrow
let suma = (a, b) => a + b;
let resta = (a,b) => a-b;
let multi = (a,b) => a*b;
let div = (a,b) => a/b;
let iva = (a) => a * .21;

//function
function eleccion() {
    sofa = prompt(`que sillon quiere comprar 1cp, 2cp o 3cp?`);
    if (sofa != "1cp" && sofa != "2cp" && sofa != "3cp") {
        sofa = prompt(`su elección no fue correcta vuelva a elegir 1cp, 2cp o 3cp`);
    }
    tela = prompt(`en que calidad de tela lo desea 1, 2 o 3?`);
    if (tela != "1" && tela != "2" && tela != "3") {
        tela = prompt(`su elección no fue correcta vuelva a elegir 1, 2 o 3`);
    }
}

eleccion();

switch(sofa){
    case `1cp`:
        metraje = 2;
        precio = 7000;
        break;
    case `2cp`:
        metraje = 3;
        precio = 9000;
        break;
    default:
        metraje = 4;
        precio = 10500;
}

switch (tela) {
    case "1":
        precioTela = multi(precio,.5);
        break;
    case "2":
        precioTela = multi(precio,.3);
        break;
    default:
        precioTela = precio;
}


console.log(`usted eligio un sofa de ${sofa}`);
console.log(`usted eligio la ${tela} calidad de tela`);
console.log(`su sofa va a usar ${metraje} mts de tela`);
console.log(`el precio de su sofa es $${precio} + el opcional de tela ${precioTela} + el iva ${iva(suma(precio,precioTela))}`);
console.log(`el precio total de su sofa es de $${suma(suma(precio,precioTela),iva(suma(precio,precioTela)))}`);