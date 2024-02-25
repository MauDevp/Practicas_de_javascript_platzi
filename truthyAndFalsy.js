//!  Qué es Truthy y Falsy?
//* Valores que son verdaderos o falsos

//* Falsy
// console.log(Boolean(0));

// console.log(Boolean(null)); //Null: null es cuando algo no existe. (De plano no existe para nada y ya esta).

// console.log(Boolean(NaN)); //NaN: En JS significa "Not a Number" y quiere decir que esa operación necesita de dos números o más para poder operarse.

// console.log(Boolean(undefined)); //Undefined: Undefined es un valor especial de JavaScript que existe cuando no se le asigna un valor a una variable. Es decir, la variable si existe o ha sido creada pero no se le ha asignado ningún valor. (Su valor es indefinido).

// console.log(Boolean(false));

// console.log(Boolean(""));

//* Truthy

// console.log(Boolean("a")); // cualquier string es verdadero

// console.log(Boolean(1)); // 1 o mayor es verdadero

// console.log(Boolean(-1)); // -1 o menor es verdadero

// console.log(Boolean([])); // un array vacio es verdadero

// console.log(Boolean({})); // un objeto vacio es verdadero

// console.log(Boolean(function(){})); // una funcion vacia es verdadero

// console.log(Boolean(true));