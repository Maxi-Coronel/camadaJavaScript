const carrito = [];

class Productos{
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
        carrito.push(producto)
    }
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

agregarProductos();
ordenarElCarrito();

console.log(carrito);