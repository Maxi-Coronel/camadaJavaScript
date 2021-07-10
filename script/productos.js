// ===================  Productos  ===================
const deJson = localStorage.getItem("productos")
const productos = JSON.parse(deJson)

// ===================  Funciones  ===================
function dibujarArray() {

    productos.forEach(e => {        
        let prod = document.getElementById("prod");

        let div1 = document.createElement("div");
        div1.setAttribute(`class`,"card");    
        div1.setAttribute(`style`,"width: 18rem;");
        prod.appendChild(div1);

        let div2 = document.createElement(`div`);
        div2.setAttribute(`class`,"card-body");
        div1.appendChild(div2);

        let h5 = document.createElement("h5");
        h5.textContent = `${e.titulo}`;
        h5.setAttribute(`class`,"card-title");
        div2.appendChild(h5);

        let parrafo = document.createElement(`p`);
        parrafo.textContent = `${e.descripcion}`;
        parrafo.setAttribute(`class`,"card-text");
        div2.appendChild(parrafo);
        
        let h6 = document.createElement("h6");
        h6.textContent = `$ ${e.precio}`;
        h6.setAttribute(`class`,"card-title");
        div2.appendChild(h6);

        let comprar = document.createElement("input");
        comprar.setAttribute(`type`,"button");
        comprar.setAttribute(`class`,"btn-primary btn");
        comprar.setAttribute(`value`,"comprar");
        div2.appendChild(comprar);
    });
};

function filtrar() {
    let categoria 
}

dibujarArray();

console.log(productos);