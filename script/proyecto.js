const productos = [];
const carrito = [];

class Producto{
    constructor(titulo, descripcion, precio, stock){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
}

const button = document.getElementById("button");
button.addEventListener(`click`, completa);

const btnCompra = document.getElementById("comprar");
button.addEventListener(`click`, agregarCarrito);

function agregarCarrito() {
    
}

function agregarProducto() {

    for (const iterator of object) {
        
    }

    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    
    let producto = new Producto(titulo, descripcion, precio, stock);

    productos.push(producto);
}

function dibujarProducto() {

    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
        
    let prod = document.getElementById("prod");

    let div1 = document.createElement("div");
    div1.setAttribute(`class`,"card");    
    div1.setAttribute(`style`,"width: 18rem;");
    prod.appendChild(div1);

    let div2 = document.createElement(`div`);
    div2.setAttribute(`class`,"card-body");
    div1.appendChild(div2);

    let h5 = document.createElement("h5");
    h5.textContent = `${titulo}`;
    h5.setAttribute(`class`,"card-title");
    div2.appendChild(h5);

    let parrafo = document.createElement(`p`);
    parrafo.textContent = `${descripcion}`;
    parrafo.setAttribute(`class`,"card-text");
    div2.appendChild(parrafo);
    
    let h6 = document.createElement("h6");
    h6.textContent = `$ ${precio}`;
    h6.setAttribute(`class`,"card-title");
    div2.appendChild(h6);

    let comprar = document.createElement("input");
    comprar.setAttribute(`type`,"button");
    comprar.setAttribute(`class`,"btn-primary btn");
    comprar.setAttribute(`value`,"comprar");
    div2.appendChild(comprar);

};

function completa() {
    agregarProducto();
    dibujarProducto();
}

console.log(productos);

/* 

function agregarProductos() {
    let cantProducto = Number(prompt(`cuantos productos quieres agregar?`));
    for (let i = 1; i <= cantProducto; i++) {
        let titulo = prompt(`Dime el titulo del producto`);
        let descripcion = prompt(`Dime una descripcion de tu producto`);
        let precio = Number(prompt(`Dime el precio de tu producto`));
        let stock = Number(prompt(`Dime la cantidad que quieres vender`));
        console.log(producto);
        carrito.push(producto);
    }
}

function agregarAlCarrito() {
    carrito.push(producto);
}

function ordenarElCarrito() {
    let orden = prompt(`Dime cual es el orden que quieres darle al carrito "nombre" o "precio"`);
    switch (orden) {
        case `precio`:
            carrito.sort(function (a, b) {
                return (a.precio - b.precio)
            });
            break;
        default:
            carrito.sort(function (a, b) {
                return (a.titulo - b.titulo)
            });
            break;
    }
}

function sumarPrecioCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        sum = sum + Number(carrito[i].precio)
        return sum
    }
}

agregarProductos();
ordenarElCarrito();

console.log(carrito);
sumarPrecioCarrito();
console.log(sum);

//clase 8 DOM

let foter = document.getElementsByTagName("footer")

console.log(foter);


let parrafo = document.createElement("p")
parrafo.textContent = "ESTE ES EL COPY DESDE TEXT CONTENT"
foter[0].appendChild(parrafo)



let div1 = document.getElementById("aca")


let div2 = document.createElement("div")
div1.appendChild(div2)

let h2primero = document.createElement("h2")
h2primero.textContent = "Este es un subtitulo"
div1.appendChild(h2primero)

let parrafo = document.createElement("p")
parrafo.textContent = "ESTE ES EL COPY DESDE TEXT CONTENT"
parrafo.setAttribute("class", "text-danger container")

div2.appendChild(parrafo)

//foter[0].innerHTML = "<p>ESTE ES EL COPY </p>"

let ocultar = document.querySelector("#id2")
ocultar.setAttribute("style", "display: none")






function dibujarProducto() {
    let input = document.getElementById("titulo").value

    let elemento = document.getElementById("aca")
    elemento.innerHTML = `Hola tu nombre es ${input}`
}

 */

//boton.addEvListener ?????



/* function saveLocal(){
    let aJson = JSON.stringify(Productos);
    localStorage.setItem("productos",aJson)
} */