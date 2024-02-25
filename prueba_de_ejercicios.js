//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

/* ¿Qué es una variable y para qué sirve?
	R= Es un espacio reservado en memoria, y sirve para guardar datos - valores

¿Cuál es la diferencia entre declarar e inicializar una variable?
	R= La diferencia es que al declararla, solo le estoy otorgando un espacio en memoria, pero sin ningún valor, y al iniciarla, le estoy dando un valor.

¿Cuál es la diferencia entre sumar números y concatenar strings?
	R= La suma de números es una operación lógica, y la concatenación de String es una union de valores.

¿Cuál operador me permite sumar o concatenar?
	R= el "+". 
*/

//2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
/* 
Nombre = nombreUsuario - "String"
Apellido = apellidoUsuario - "String"
Nombre de usuario en platzi = nombreDeUsuarioPlatzi - "String"
Edad = edadUsuario - "Number"
Correo electrónico = emailUsuario - "String"
Mayor de edad = esMayorDeEdad - "Boolean"
Dinero ahorrado = dineroAhorradoUsuario - "Number"
Deudas = deudasUsuario - "Number"
 */

//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombreUsuario = "Mauricio";
let apellidoUsuario = "Sandoval";
let nombreDeUsuarioPlatzi = "MauMau"
let edadUsuario = 22;
let emailUsuario = "mauricioramonsilvasandoval@gmail.com";
let esMayorDeEdad = true;
let dineroAhorradoUsuario = 10000;
let deudasUsuario = 1500;

//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

console.log("Nombre Completo: ", nombreUsuario, apellidoUsuario);
console.log("Dinero real: ", dineroAhorradoUsuario - deudasUsuario);

Funciones
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

/**
 * ¿Qué es una función?
 * R= Es un bloque de código que se ejecuta cuando es llamado.
 * 
 *¿Cuándo me sirve usar una función en mi código?
 * R= Cuando necesito ejecutar un bloque de código varias veces.
 * 
 *¿Cuál es la diferencia entre parámetros y argumentos de una función?
 * R= Los parámetros son los valores que se le pasan a la función al momento de ser llamada, y los argumentos son los valores que se le pasan a la función al momento de ser declarada (son los parámetros que se le pasan a la función pero ya convertidos e implementados en mi función).
 * 
 */

//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function impresionDeNombreYApodo(nombre, apellido, apodo){
    let nombreCompleto = nombre + " " + apellido;
    let nickname = apodo + ".";
    console.log("Mi nombre es:", nombreCompleto, "pero prefiero que me digas:", nickname);
}

console.log(impresionDeNombreYApodo("Mauricio", "Sandoval", "MauMau"));

// Condicionales
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

/**
 * ¿Qué es un condicional?
 * R= Es una comprobación lógica que se realizar para tomar decisiones. 
 * 
 * ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
 * R= if, else if, else, switch y operador ternario.
 * 
 * ¿Puedo combinar funciones y condicionales?
 * R= si, se pueden combinar.
 * 
 */

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Opción no valida");
}

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏


let tipoDeSuscripcionPlatzi = ["Free", "Basic", "Expert", "ExpertPlus"];
let respuestaDeSuscripción = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
console.log(respuestaDeSuscripción[tipoDeSuscripcionPlatzi.indexOf(tipoDeSuscripcion)]);

// Ciclos
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

/**
 * ¿Qué es un ciclo?
 * R= Es una estructura de control que se repite varias veces hasta cumplir una condición.
 * 
 * ¿Qué tipos de ciclos existen en JavaScript?
 * R= for, while, do while, for of, for in y for each.
 * 
 * ¿Qué es un ciclo infinito y por qué es un problema?
 * R= Es un ciclo que no tiene una condición de salida, y es un problema porque se ejecuta de manera indefinida.
 * 
 * ¿Puedo mezclar ciclos y condicionales?
 * R= si, se pueden mezclar.
 * 
 */

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

let i = 0;
while (i <= 5){
    console.log("El valor de i es: " + i);
    i++;
}
console.log("\n\n");

i = 10;
while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}


// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.

let respuestaCorrecta = false;
while (respuestaCorrecta === false){
    let respuesta = prompt("¿Cuánto es 2 + 2?");
    if(respuesta === "4"){
        console.log("¡Felicidades, es la respuesta correcta!");
        respuestaCorrecta = true;
    } else{
        console.log("Respuesta incorrecta, intenta de nuevo");
    }
}


//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

/**
 * ¿Qué es un array?
 * R= es una colecciones de elementos con valores de una sola variable
 * 
 * ¿Qué es un objeto?
 * R= Es una estructura de datos que almacena una colección de keys y valores.
 * 
 * 
 * ¿Cuándo es mejor usar objetos o arrays?
 * R= Los objetos son mejor para almacenar datos que tienen una relación entre si y que tienen propiedades,
 * y los arrays son mejor para almacenar datos que no tienen una relación entre si y que no tienen propiedades.
 * 
 * ¿Puedo mezclar arrays con objetos o incluso objetos con arrays 
 * R= si, se pueden mezclar.
 * 
 */

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function retornarPrimerElementoArray(array){
    console.log(array[0]);
}


//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementosArray(array){
    for(let i = 0; i < arrayE.length ;i++){
        console.log(arrayE[i]);
    }
}

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirElementosObjeto(objeto){
    for (let propiedad in objeto){
        console.log(propiedad + ": " + objeto[propiedad]);
    }
}

/*

Object.values() sirve para convertir objetos a arrays y retornar sus valores
Object.keys() sirve para convertir objetos a arrays y retornar sus keys
Object.entries() sirve para convertir objetos a arrays y retornar su key y valor en 0 el key y en 1 el valor

console.log(Object.keys(frutas)[1]);
console.log(Object.values(frutas)[1]);
console.log(Object.entries(frutas)[1]);
*/
