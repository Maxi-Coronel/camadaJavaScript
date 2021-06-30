//let
let mod = prompt(`que modulación quiere? 1cp, 2cp o rinconero?`)

while (mod != `1cp` && mod != `2cp` && mod != `rinconero`) {
    mod = prompt(`su eleccion debe ser "1cp", "2cp" o "rinconero"`)
}

let met = 0;
let tel = prompt(`que calidad quiere? 1ra, 2da o 3ra?`)

while (tel != `1ra` && tel != `2da` && tel != `3ra`) {
    tel = prompt(`su eleccion debe ser "1ra", "2da" o "3ra"`)
}

let preTel = 0;

//function arrow
let suma = (a, b) => a + b;
let multi = (a, b) => a * b;

//objetos
class sofa{
    constructor(nombre, modulacion, tela, metraje, precio){
        this.nombre = nombre;
        this.modulacion = modulacion;
        this.tela = tela;
        this.metraje = metraje;
        this.precio = precio;
    }
}

switch (tel) {
    case `1ra`:
        preTel = 800;
        break;
    case `2da`:
        preTel = 600;
        break;
    default:
        preTel = 300;
        break;
}

switch (mod) {
    case `1cp`:
        met = 2;
        pre = suma(2000, multi(preTel, met));
        break;
    case `2cp`:
        met = 3;
        pre = suma(3500, multi(preTel, met));
        break;
    default:
        met = 6;
        pre = suma(6000, multi(preTel, met));
        break;
}

const misana = new sofa(`misana`, mod, tel, met, pre);

console.log(misana);