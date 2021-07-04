/* for (let index = 0; index < localStorage.length; index++) {
    const element = array[index];

}
 */

//guardando info en localStorage
/* localStorage.setItem(`bienvenida`, `Hola coder`); //agrega info al localStorage

console.log(localStorage.getItem(`bienvenida`)); //llama a un elemento del localStorage

localStorage.removeItem(`bienvenida`); //borra un elemento localStorage

localStorage.clear() //borra todo lo que haya en el localStorage


const multiplicar = (a,b) => a*b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

let ingresarNumero = Number(prompt(`Ingresa un número`));

for (let index = 0; index <= 10; index++) {
    guardarLocal(index, multiplicar(ingresarNumero, index));
} */

//convertir a JSON, guardar en localStorage
const producto = { id: 2, producto: `Arroz` };//objeto
const enJson = JSON.stringify(producto);//convertir objeto a JSON
localStorage.setItem(`producto`, enJson)//guardar el JSON en localStorage
const producto1 = JSON.parse(enJson)//pasar JSON a objeto
const producto2 = JSON.parse(localStorage.getItem(`producto`));
console.log(producto2);