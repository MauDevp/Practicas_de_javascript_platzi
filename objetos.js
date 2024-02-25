//TODO - Objetos
//title: Qué son los objetos en JavaScript
// Los objetos son una estructura de datos que nos permite almacenar diferentes tipos de datos. Se declaran con llaves y cada dato tiene un nombre y un valor. Por ejemplo:
//
// var persona = {
//     nombre: "Juan",
//     apellido: "Pineda",
//     edad: 25
// }
//
// En este caso, el objeto persona tiene tres propiedades: nombre, apellido y edad. Cada propiedad tiene un valor asociado. Para acceder a las propiedades de un objeto se utiliza la notación de punto:
//
// console.log(persona.nombre); // Juan
// console.log(persona.apellido); // Pineda
// console.log(persona.edad); // 25
// También se pueden acceder las propiedades de un objeto con corchetes:
//
// console.log(persona["nombre"]); // Juan
// console.log(persona["apellido"]); // Pineda
// console.log(persona["edad"]); // 25
// Ejemplo:
//

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}.`); //this hace referencia al objeto en el que se encuentra
    }   // para que es this?: This es una palabra clave que hace referencia al objeto actual, es decir, el objeto que está siendo creado o el objeto que está siendo referenciado en ese momento.

};

// console.log(miAuto.detalleDelAuto());

// constructor de objetos
// Un constructor es una función que nos permite crear un objeto. En JavaScript, los objetos se crean con funciones constructoras. La sintaxis es la siguiente:
//
// function nombreFuncion(parametro1, parametro2){
//     this.propiedad = parametro1;
//     this.propiedad = parametro2;
// }
// Ejemplo:

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);