//entidades/objetos-----------------------
//variables-------------------------------
//---arrays--------------------
//---selectores----------------
//funciones-------------------------------
//eventos---------------------------------
//logica----------------------------------

//id = Math.random()????
//buscar el ultimo numero y agregar 1
//find filtra un elemento
//filter filtra un objeto







// ===================        Array         ===================
const carrito = []

// ===================        Const         ===================

// ===================  Traer localStorage  ===================
const deJson = localStorage.getItem("productos")
const productos = JSON.parse(deJson)

// ===================        Eventos        ===================
//compra.addEventListener(`click`, agregarProducto);

// ===================       Funciones       ===================
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

        let form = document.createElement(`p`);
        form.textContent = `${e.formato}`;
        form.setAttribute(`class`,"card-text");
        div2.appendChild(form);

        let est = document.createElement(`p`);
        est.textContent = `${e.estado}`;
        est.setAttribute(`class`,"card-text");
        div2.appendChild(est);

        let cons = document.createElement(`p`);
        cons.textContent = `${e.consola}`;
        cons.setAttribute(`class`,"card-text");
        div2.appendChild(cons);
        
        let h6 = document.createElement("h6");
        h6.textContent = `$ ${e.precio}`;
        h6.setAttribute(`class`,"card-title");
        div2.appendChild(h6);

        let comprar = document.createElement("input");
        comprar.setAttribute(`type`,"button");
        comprar.setAttribute(`class`,"btn-primary btn");
        comprar.setAttribute(`value`,"comprar");
        comprar.setAttribute(`id`,`${e.id}`);
        div2.appendChild(comprar);
    });
};

dibujarArray();