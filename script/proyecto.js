// ===================        Array        ===================
const productos = [];

// ===================       Const       ===================
const button = document.getElementById("button");
const btnCompra = document.getElementById("comprar");
const cantCarrito = document.getElementById("n-carrito");

// ===================       Eventos       ===================
button.addEventListener(`click`, agregarProducto);

// ===================  Clase constructora  ===================
class Producto{
    constructor(titulo, estado, precio, stock, formato){
        this.titulo = titulo;
        this.estado = estado;
        this.precio = precio;
        this.stock = stock;
        this.formato = formato;
    }
}

// ===================       Funciones       ===================

function agregarProducto() {
    const deJson = localStorage.getItem("productos")
    const productos = JSON.parse(deJson)

    let titulo = document.getElementById("titulo").value;
    let estado = document.getElementById("estado").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    let formato = document.getElementById("formato").value;
    
    let producto = new Producto(titulo, estado, precio, stock, formato);

    productos.push(producto);
    
    let aJson = JSON.stringify(productos);
    localStorage.setItem("productos",aJson);
}

function dibujarProducto() {

    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
        
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

/* 

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

 */