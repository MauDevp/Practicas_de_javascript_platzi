// Autor: Mauricio Ramon Silva Sandoval
// Objetivo: Crear un objeto con un constructor y un loop de 30 objetos con sus propiedades.

// Este es mi array de modelos
var modelos = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo", 
    "Ka",   //5
    "S-MA", 
    "B-MAX", 
    "Grand C-Max", 
    "Tourneo Custom", 
    "Kuga", //10
    "Galaxy", 
    "Grand Tourneo Con",
    "Tourneo Connect", 
    "EcoSport", 
    "Tourneo Courier", //15
    "Mustang", 
    "Transit", 
    "Edge", 
    "Ka+", 
    "Fiesta", //20
    "Focus", 
    "Mondeo", 
    "Ka", 
    "S-MA", 
    "B-MAX", //25
    "Grand C-Max", 
    "Tourneo Custom", 
    "Kuga", 
    "Galaxy",
    "Grand Tourneo Con"//30
];
// Este es mi array de marcas
var marcas = [
    "Abarth", 
    "Alfa Romeo", 
    "Aston Martin", 
    "Audi", 
    "Bentley", //5
    "BMW", 
    "Cadillac", 
    "Caterham", 
    "Chevrolet", 
    "Citroen", //10
    "Dacia", 
    "Ferrari", 
    "Fiat", 
    "Ford", 
    "Honda", //15
    "Infiniti", 
    "Isuzu", 
    "Iveco", 
    "Jaguar", 
    "Alfa Romeo", //20
    "Aston Martin", 
    "Audi", 
    "Bentley", 
    "BMW", 
    "Cadillac", //25
    "Caterham", 
    "Chevrolet", 
    "Citroen", 
    "Dacia", 
    "Ferrari"  //30
];
// Este es mi array de fechas
var fechas = [
    "1988", 
    "1989", 
    "1978", 
    "1989", 
    "1928", //5
    "1989", 
    "1968", 
    "1989", 
    "1888", 
    "1989", //10
    "1288", 
    "1989", 
    "1938", 
    "1989", 
    "1988", //15
    "1999", 
    "1983", 
    "1989", 
    "1918", 
    "1989", //20
    "1978", 
    "1989", 
    "1928", 
    "1989", 
    "1968", //25
    "1989", 
    "1888", 
    "1989", 
    "1288", 
    "1989"  //30
];

// Este es mi objeto
var autos = {
    marca: marcas,
    modelo: modelos,
    annio: fechas,
}

// Este es mi constructor
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Este es mi contador
i = 0;

// Este es mi loop
for(modelo of modelos){
    var modelo = new auto(modelos[i], marcas[i], fechas[i]); // Este es mi instancia
    i++;    // Este es mi incremento
    console.log(`N° ${i}:   `, modelo); // Este es mi resultado
}