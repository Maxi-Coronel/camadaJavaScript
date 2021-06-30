//objetos
/* const Yo = {
    nombre: `maxi`,
    apellido: `coronel`,
    edad: 28,
};
Yo.ojos = `marrones`;
console.log(Yo); */

//Desafio
let cred = Number(prompt(`ingrese el monto de dinero que desea para el credito`));
let cantidad = Number(prompt(`ingrese la cantidad de cuotas que desesa`));

class persona {
    constructor(nombre, apellido, edad, ojos, credito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ojos = ojos;
        this.credito = credito;
    }

    interes(cantidad){
        let resultado = cantidad * .4 / 12;
        return resultado
    }

    cuotas(cantidad){
        let resultado = (this.credito * this.interes(cantidad) + this.credito) / cantidad;
        return resultado
    }

    total(){
        let resultado = this.credito * this.interes(cantidad) + this.credito;
        return resultado
    }
}

const Cliente = new persona(`maxi`, `coronel`, 28, `marron`, cred);

console.log(Cliente);
console.log(`El credito es de $${Cliente.credito}`);
console.log(`el interes es de un ${Cliente.interes(cantidad)}`);
console.log(`tiene que abonar ${cantidad} cuotas de ${Cliente.cuotas(cantidad)}`);
console.log(`devuelves un total de $${Cliente.total()}`);

/* class producto {
    constructor(titulo, descripcion, precio, stock){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock
    }
} */