//! Que es la cohersion y como funciona
//* Cohersion es la forma en que podemos cambiar un tipo de valor a otro tipo de valor
//* Existen dos tipos de cohersion, inplicita y explicita

//cohersion inplicitaa
console.log("Cohersion inplicita \n");
var a = 4 + "7";

console.log(a); //47
console.log(typeof a); //string


var b = 4 * "7"; //28

console.log(b); //28
console.log(typeof b); //number

// coercion explicita
console.log("\n\n Cohersion explicita \n");
var a = 20;
var b = a + "";

console.log(b); //20
console.log(typeof b); //string

//  coercion explicita con el constructor
var c = String(a); // String es un constructor, es un metodo que convierte a string
console.log(c); //20
console.log(typeof c); //string

var d = Number(c); // Number es un constructor, es un metodo que convierte a Number
console.log(d); //20
console.log(typeof d);  //number