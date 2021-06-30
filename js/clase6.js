/* let numeros = [1, 3, 2, 4];

let letras = [`A`, `C`, `B`, `D`];

let masLetras = [`Z`, `X`, `R`];

let numerosLetras = letras.concat(numeros);//se usa para agregar los datos de un array dentro de otro

let completo = numerosLetras.concat(masLetras);

let corte = numerosLetras.slice(1,3);//se usa para mostrar elementos dentro de un array (desde, hasta)

let ordenado = numerosLetras.sort();//se usa para ordenar alfabeticamente

let separado = numeros.join(`-`);//se usa para separar que un caracter

for (let index = 0; index < numeros.length; index++) {
console.log(numeros[index]);
}

numeros.push(5);//se usa para agregar un elemento al final

console.log(numeros);

numeros.unshift(0);//se usa para agregar un elemento al principio

console.log(numeros);
console.log(letras);
console.log(numerosLetras);
console.log(corte);
console.log(ordenado);
console.log(separado);
console.log(completo); */

class producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new producto(`mate`,1000);
const producto2 = new producto(`bombilla`,800);
const producto3 = new producto(`termo`,2500);
const producto4 = new producto(`yerbera`,500);

const Productos = [];

Productos.push(producto1);
Productos.push(producto2);
Productos.push(producto3);
Productos.push(producto4);

console.log(Productos);

let productosOrdenados = Productos.sort(function(a,b) {
    if (a.nombre < b.nombre) {
        return 1;
    }
    if (a.nombre > b.nombre) {
        return -1;
    }
    return 0;
});

console.log(productosOrdenados);
console.log(Productos.find(producto => producto.nombre == `mate`));//se usa para usar el buscador y devuelve 1 solo objeto
console.log(Productos.filter(producto => producto.precio >= 1000));//se usa para filtrar

const object = {nombre:`maxi`, edad:28}

//for in
/* for (const e in object) {
    if (Object.hasOwnProperty.call(object, e)) {
        console.log(object[e]);
    }
} */

//for of
/* for (const object of Productos) {
    for (const propiedad in object) {
        if (Object.hasOwnProperty.call(object, propiedad)) {
            console.log(object[propiedad]);
            
        }
    }
} */

//for each
Productos.forEach(element => {
    for (const propiedad in element) {
        if (Object.hasOwnProperty.call(element, propiedad)) {
            console.log(element[propiedad]);
            
        }
    }
});