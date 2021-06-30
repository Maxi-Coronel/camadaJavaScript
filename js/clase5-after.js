class Comidas {
    constructor(nombre, precio, disponible, condimentos, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.condimentos = condimentos
        this.stock = stock
    }
    publicidad() {
        if (this.disponible == true) {
            let resultado = `Tenes un descuento en ${this.nombre}, salia ${this.precio} y ahora sale ${this.precio / 2}`
            console.log(resultado);
        } else {
            let error = `Lo sentimos, no nos quedo ${this.nombre}`
            console.log(error);
        }
    }
    comprar() {
        if (this.stock > 3) {
            this.precio = 500
        }
        if (this.stock > 0) {
            if (this.stock <= 3 && this.stock > 0) {
                this.precio = this.precio * 1.2
                console.log(`Cuidado te quedan pocos ${this.nombre}`);
                if (this.stock == 1) {
                    let emergencia = confirm(`Cuidado, te queda 1 ${this.nombre}, queres pedir de emergencia 5 mas?`)
                    if (emergencia == true) {
                        this.stock = this.stock + 5
                        console.log("ESTE ES UN PEDIDO DE EMERGENCIA");
                    }
                }
            }
            console.log(`Usted compro ${this.nombre}, quedan en stock ${this.stock}`);
            this.stock = this.stock - 1;
        } else {
            this.disponible = false;
            let error = `No quedan mas ${this.nombre}`;
            alert(error)
        }
    }
    proveedor(cantidad) {
        console.log(`Compraste ${cantidad} ${this.nombre}`);
        this.stock = this.stock + cantidad
    }
}

const Pizza = new Comidas("Pizza", 500, true, { condimiento1: "Queso", condimento2: "Oregano" }, 5);
const Guiso = new Comidas("Guiso", 15, false, { condimiento1: "Papa", condimiento2: "Fideos" }, 5);
const Milanesa = new Comidas("Milanesa", 300, true, { condimiento1: "Pan", condimiento2: "Carne" }, 5);

Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.proveedor(4)
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();
Pizza.comprar();
Pizza.publicidad();