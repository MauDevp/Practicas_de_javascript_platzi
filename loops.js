//TODO - Loops

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

/* -------------------------------------------------------------------------- */ //SECTION - (Titulo)
/*                         Qué son los loops ?                                */ //title: Qué son los loops
/* -------------------------------------------------------------------------- */
//REVIEW - (Qué son los loops)
//Los loops son una forma de automatizar tareas repetitivas. En lugar de repetir una y otra vez un bloque de código, los loops nos permiten ejecutar una misma instrucción un número determinado de veces.

// Existen diferentes tipos de loops, pero todos comparten la misma estructura:

//? for (inicio; condición; incremento) {
//?     código a ejecutar
//? }

//REVIEW - (Partes del Loop)
// El loop for tiene tres partes:

// Inicio: se ejecuta una sola vez, al iniciar el loop.
// Condición: se ejecuta antes de cada iteración. Si es verdadera, se ejecuta el código del loop. Si es falsa, el loop termina.
// Incremento: se ejecuta al terminar cada iteración.
// Ejemplo:

//* for(var i = 0; i < estudiantes.length; i++){
//*     saludarEstudiantes(estudiantes[i]);
//* }

//SUBSECTION (for of)
//NOTE For of es una nueva forma de recorrer los elementos de un array. La sintaxis es la siguiente:

//? for (variable of iterable) {
//?     código a ejecutar
//? }

// Ejemplo:

//* for(var estudiante of estudiantes){
//*     saludarEstudiantes(estudiante);
//* }
//!SUBSECTION

//SUBSECTION (for in)
//NOTE For in es una forma de recorrer las propiedades de un objeto. La sintaxis es la siguiente:

//? for (variable in objeto) {
//?     código a ejecutar
//? }

// Ejemplo:

//* var estudiantes = {
//*     nombre: "Juan",
//*     apellido: "Pineda",
//*     edad: 25
//* }

//* for(var propiedad in estudiantes){
//*     console.log(`${propiedad}: ${estudiantes[propiedad]}`);
//* }
//!SUBSECTION

//NOTE - for in y for of son formas de recorrer elementos, pero for in es para objetos y for of es para arrays.

//SUBSECTION (while)
//NOTE While es otra forma de ejecutar código mientras una condición sea verdadera. La sintaxis es la siguiente:

//? while (condición(verdadera)) {
//?     código a ejecutar hasta que sea falsa
//? }

// Ejemplo:
//* while(estudiantes.length > 0){
//*     console.table(estudiantes);
//*     var estudiante = estudiantes.shift();
//*     saludarEstudiantes(estudiante);
//* }

//!SUBSECTION

//SUBSECTION (do while)
//NOTE Do while es similar a while, pero la diferencia es que el código se ejecuta al menos una vez, y luego se evalúa la condición. La sintaxis es la siguiente:

//? do {
//?     código a ejecutar
//? } while (condición(verdadera));

// Ejemplo:
//* do {
//*     console.table(estudiantes);
//*     var estudiante = estudiantes.shift();
//*     saludarEstudiantes(estudiante);
//* } while(estudiantes.length > 0);
//!SUBSECTION

//!SECTION (do while)