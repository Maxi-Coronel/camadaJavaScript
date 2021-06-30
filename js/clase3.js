                        //clase3

                        //ciclos e iteraciones
//for - while - do while -- swich

//break
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        break
    };
    console.log(i);
};

console.log(`esta fue la prueba del break`);

//continue
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        continue
    };
    console.log(i);
};

console.log(`acá probamos el continue`);

//deletreo
let nombre1 = prompt(`ingrese su nombre`)

for (let i = 0; i < nombre1.length; i++) {
    console.log(nombre1.substr(i,1));    
};

console.log(`deletreamos tu nombre`);

//tabla de multiplicar
let numeroTabla = Number(prompt(`ingrese su número a multiplicar`));
let resultado = 0;
for (let i = 1; i <= 10; i++) {
    resultado = numeroTabla*i;
    console.log(`${numeroTabla}*${i}=${resultado}`);
};

console.log(`practicamos las tablas de multiplicar`);

//imprime solo números pares
let n = Number(prompt(`ingrese un número final para ver los pares`));

for (let i = 1; i <= n ; i++){
    if ((i % 2)== 0){
        console.log(i);
    }
};

console.log(`imprimimos los números pares`);

//while
let i = 1;
let valida = confirm(`querés seguir contando?`);
while(valida){
    console.log(i);
    i++;
    valida = confirm(`querés seguir contando?`)
};

console.log(`preguntamos hasta cuando quiera contar`);

//do while

let y = 1;
do{
    console.log(y);
    y++
}while(y<5);

//switch

//calculadora
let a = Number(prompt(`Ingrese el primer número para la calcladora`));
let operador = prompt(`ingresa un operador matematico`);
let b = Number(prompt(`Ingrese el segundo número para la calcladora`));
let res = 0;

if (isNaN(a) || isNaN(b)) {
    alert(`alguno de sus datos no es un número`);
    a = Number(prompt(`ingrese su primer número`));
    b = Number(prompt(`ingrese su segundo número`));
}

switch(operador){
    case `+`:
        res = a+b;
        console.log(a + `+` + b + `=` + res);
        break;
    case `-`:
        res = a-b;
        console.log(a + `-` + b + `=` + res);
        break;
    case `*`:
        res = a*b;
        console.log(a + `*` + b + `=` + res);
        break;
    case `/`:
        res = a/b;
        console.log(a + `/` + b + `=` + res);
        break;
    default:
        console.log(`lo ingresado no fue un operador conocido por esta calculadora`);
}

console.log(`creamos una calculadora`);

//detectar vocales y consonantes
let nombre = prompt(`ingrese su nombre`);
let letra;

for (let i = 0; i < nombre.length; i++) {

    letra = nombre.substr(i,1);

    switch(letra){
    case `a`:
        console.log(`${letra} es vocal!`);
        continue;
    case `e`:
        console.log(`${letra} es vocal!`);
        continue;
    case `i`:
        console.log(`${letra} es vocal!`);
        continue;
    case `o`:
        console.log(`${letra} es vocal!`);
        continue;
    case `u`:
        console.log(`${letra} es vocal!`);
        continue;
    default:
        console.log(`${letra} es consonante!`)
    }
};