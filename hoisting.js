//! Hoisting: eleva las declaraciones, no las inicializaciones
//NOTE - Qué es el hoisting en JavaScript
//NOTE - Es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código.
// El hoisting es un comportamiento de JavaScript que mueve las declaraciones al inicio de un ámbito. Sin embargo, solo mueve las declaraciones, no las inicializaciones. Por ejemplo:
//? Las variables y funciones se procesan antes de que se ejecute cualquier código

console.log(miNombre); // undefined

var miNombre = "Diego";

hey(); // Hola undefined

function hey() {
    console.log("Hola " + miNombre);
}