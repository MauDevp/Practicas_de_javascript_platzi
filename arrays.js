//TODO[epic=ejemplos] Ejemplos de arrays

/* -------------------------------------------------------------------------- */
/*                          Que son los arrays                                */ //title qué son los arrays ?
/* -------------------------------------------------------------------------- */
// Los arrays son estructuras de datos que nos permiten almacenar varios datos y agruparlos. Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas. Se declaran con corchetes cuadrados: 
// var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

/* -------------------------------------------------------------------------- */ //SECTION ejemplo de array
/*                  Cómo acceder a los elementos de un array                  */ //title cómo acceder a los elementos de un array
/* -------------------------------------------------------------------------- */

// Para acceder a los elementos de un array se utiliza su índice. Los índices en los arrays empiezan desde cero (0). Por ejemplo, para acceder a la "Manzana" en el array de frutas:
// var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
// console.table(frutas[0]); // Manzana
// console.table(frutas[1]); // Plátano
// console.table(frutas[2]); // Cereza
// console.table(frutas[3]); // Fresa


var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.table(frutas[0]); // Manzana
console.table(frutas[1]); // Plátano
console.table(frutas[2]); // Cereza
console.table(frutas[3]); // Fresa

console.table(frutas.length); // =4, //NOTE - //? método para saber la cantidad de elementos que tiene un array ".length"

var masFrutas = frutas.push("Uvas"); //NOTE - //? método para agregar un elemento al final del array ".push()"
console.table(frutas);

var ultimo = frutas.pop("Uvas");     //NOTE - //? método para eliminar el último elemento del array ".pop()"
console.table(frutas);

var nuevaLongitud = frutas.unshift("Uvas"); //NOTE - //? método para agregar un elemento al inicio del array ".unshift()"
console.table(frutas);

var borrarFrutaInicio = frutas.shift("Uvas"); //NOTE - //? método para eliminar el primer elemento del array ".shift()"
console.table(frutas);

var posición = frutas.indexOf("Cereza"); //NOTE - //? método para saber la posición de un elemento del array ".indexOf()"
console.table(posición); // =2

console.table(frutas); //NOTE - //? método para mostrar el array en forma de tabla ".table()"
console.info(">>Empieza el recorrido de arrays: \n\n"); //NOTE - //? método para mostrar el array en forma de tabla ".table()"

// otro método
/* var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //NOTE -  //? splice el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
console.log(articulos); //REVIEW - que hace splice ?: splice es un método que nos permite eliminar elementos de un array, lo que hace es que va a eliminar los elementos que le pasemos en el índice que le pasemos y la cantidad de elementos que le pasemos.
    NOTE - ['carro', 'celular', 'tv', 'libro'] 
 */

//!SECTION


/* -------------------------------------------------------------------------- */
/*                       Métodos de recorrido de arrays                       */ //SECTION métodos de recorrido de arrays
/* -------------------------------------------------------------------------- */


var articulos= [
    {
        nombre: "Bici",
        costo: 3000,
    },
    {
        nombre: "Tv",
        costo: 2500,
    },
    {
        nombre: "Libro",
        costo: 320,
    },
    {
        nombre: "Celular",
        costo: 10000,
    },
    {
        nombre: "Laptop",
        costo: 20000,
    },
    {
        nombre: "Teclado",
        costo: 500,
    },
    {
        nombre: "Audífonos",
        costo: 1700,
    }
];

/* var articulosFiltrados = articulos.filter(function(articulo){ //NOTE - //? filter es un método que nos permite filtrar elementos de un array
    return articulo.costo <= 500;   //REVIEW - que hace filter ?: filter es un método que lo que hace es filtrar elementos de un array, lo que hace es que va a iterar cada uno de los elementos del array y va a devolver un nuevo array con los elementos que cumplan con la condición que le pasemos en nuestra función. 
});

console.log(articulosFiltrados); */

/* var nombreArticulos = articulos.map(function(articulo){ //NOTE - //? map es un método que nos permite mapear elementos de un array
    return articulo.nombre; //REVIEW - que hace map ?: map es un método que nos permite mapear elementos de un array, lo que hace es que va a iterar cada uno de los elementos del array y va a devolver un nuevo array con los elementos que cumplan con la condición que le pasemos en nuestra función.
});

console.log(nombreArticulos); */

//* Cual es la diferencia entre map y filter ?: La diferencia entre map y filter es que map nos va a devolver un nuevo array con los elementos que cumplan con la condición que le pasemos en nuestra función, mientras que filter nos va a devolver un nuevo array con los elementos que cumplan con la condición que le pasemos en nuestra función.
//* En resumen, map se utiliza para transformar todos los elementos de un array, mientras que filter se utiliza para seleccionar un subconjunto de elementos de un array.

// otro método

/* var encuentraArticulo = articulos.find(function(articulo){  //NOTE - //? find es un método que nos permite encontrar elementos de un array
    return articulo.nombre === "Laptop"; //REVIEW - que hace find ?: find es un método que nos permite encontrar elementos de un array, lo que hace es que va a iterar cada uno de los elementos del array y va a devolver el primer elemento que cumpla con la condición que le pasemos en nuestra función.
});

console.log(encuentraArticulo); */

//* Cual es la diferencia entre find y filter ?: La diferencia entre find y filter es que filter nos va a devolver un nuevo array con los elementos que cumplan con la condición que le pasemos en nuestra función, mientras que find nos va a devolver el primer elemento que cumpla con la condición que le pasemos en nuestra función.

// otro método

/* articulos.forEach(function(articulo){ //NOTE - //? forEach es un método que nos permite recorrer elementos de un array
    console.log(articulo.nombre); //REVIEW - que hace forEach ?: forEach es un método que nos permite recorrer elementos de un array, lo que hace es que va a iterar cada uno de los elementos del array y va a ejecutar la función que le pasemos en cada uno de los elementos del array.
}); */

//* Cual es la diferencia entre forEach y map ?: La diferencia entre forEach y map es que forEach nos va a permitir ejecutar una función por cada uno de los elementos del array, mientras que map nos va a devolver un nuevo array con los resultados de la función que le pasemos.


/* var articulosBaratos = articulos.some(function(articulo){ //NOTE - //? some es un método que nos permite validar si un elemento de un array cumple con una condición
    return articulo.costo <= 700; //REVIEW - que hace some ?: some es un método que nos permite validar si un elemento de un array cumple con una condición, lo que hace es que va a iterar cada uno de los elementos del array y va a devolver true si al menos un elemento cumple con la condición que le pasemos en nuestra función.
});

console.log(articulosBaratos); */

/* var articulosCaros = articulos.every(function(articulo){ //NOTE - //? every es un método que nos permite validar si todos los elementos de un array cumplen con una condición
    return articulo.costo <= 700; //REVIEW - que hace every ?: every es un método que nos permite validar si todos los elementos de un array cumplen con una condición, lo que hace es que va a iterar cada uno de los elementos del array y va a devolver true si todos los elementos cumplen con la condición que le pasemos en nuestra función.
});

console.log(articulosCaros); */

//* Cual es la diferencia entre some y every ?: La diferencia entre some y every es que some nos va a devolver true si al menos un elemento cumple con la condición que le pasemos en nuestra función, mientras que every nos va a devolver true si todos los elementos cumplen con la condición que le pasemos en nuestra función.

//!SECTION


//TODO[epic=lista] lista de métodos de arrays en JavaScript
/**
 * Los métodos que vimos son los más comunes y útiles para trabajar con arrays en JavaScript, pero existen muchos más métodos que nos permiten hacer diferentes operaciones con los arrays. Te invito a que los explores y los pruebes en tu consola para que te familiarices con ellos.
 * esta es la lista de los métodos que vimos:
 * 
 *; //SUBSECTION - métodos de filtrado y búsqueda:
 * .filter()    //REVIEW - filter es un método que nos permite filtrar elementos de un array //NOTE - .filter nos puede devolver varios de los elementos de un array u objetos de un arrays
 * .map()       //REVIEW - map es un método que nos permite mapear elementos de un array
 * .find()      //REVIEW - find es un método que nos permite encontrar elementos de un array
 * .forEach()   //REVIEW - forEach es un método que nos permite recorrer elementos de un array
 * .some()      //REVIEW - some es un método que nos permite validar si un elemento de un array cumple con una condición
 * .every()     //REVIEW - every es un método que nos permite validar si todos los elementos de un array cumplen con una condición
 *; //!SUBSECTION
 * 
 *; //SUBSECTION - métodos de modificación:
 * .splice()    //REVIEW - splice es un método que nos permite eliminar elementos de un array
 * .push()      //REVIEW - push es un método que nos permite agregar un elemento al final del array
 * .pop()       //REVIEW - pop es un método que nos permite eliminar el último elemento del array
 * .unshift()   //REVIEW - unshift es un método que nos permite agregar un elemento al inicio del array
 * .shift()     //REVIEW - shift es un método que nos permite eliminar el primer elemento del array
 *; //!SUBSECTION
 * 
 *; //SUBSECTION - métodos de ordenamiento:
 * .indexOf()   //REVIEW - indexOf es un método que nos permite saber la posición de un elemento del array
 * .length      //REVIEW - length es un método que nos permite saber la cantidad de elementos que tiene un array
 * .table()     //REVIEW - table es un método que nos permite mostrar el array en forma de tabla
 *; //!SUBSECTION
 */
