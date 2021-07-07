let sum = 0;
const carrito = [];

let descripcion = document.getElementById("descripcion").value;
let precio = document.getElementById("precio").value;
let stock = document.getElementById("stock").value;

const button = document.getElementById("button");
button.addEventListener(`click`, dibujarProducto);

function dibujarProducto() {
    
    let titulo = document.getElementById("titulo").value;
    let tarjeta = document.getElementById("tarjeta");

    let h5 = document.createElement("h5");
    h5.textContent = `${titulo}`
    h5.setAttribute(`class`,"card-title");
    tarjeta.appendChild(h5);

    //tarjeta.innerHTML = `<h5>${titulo}</h5>`;
/* 
    let h5 = document.createElement("h5");
    h5.textContent = titulo;
    tarjeta.appendChild(h5); */
    
};

    /*{ <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> }*/


/* class Productos{
    constructor(id, titulo, descripcion, precio, stock){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock
    }
}

function agregarProductos() {
    let cantProducto = Number(prompt(`cuantos productos quieres agregar?`));
    for (let i = 1; i <= cantProducto; i++) {
        let titulo = prompt(`Dime el titulo del producto`);
        let descripcion = prompt(`Dime una descripcion de tu producto`);
        let precio = Number(prompt(`Dime el precio de tu producto`));
        let stock = Number(prompt(`Dime la cantidad que quieres vender`));
        let producto = new Productos(i, titulo, descripcion, precio, stock);
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