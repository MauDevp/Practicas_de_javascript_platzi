//TODO - Switch
//Title: Qué es el switch
// El switch es una estructura de control de flujo, que nos ayuda a tomar decisiones mediante la evaluacion de una condicion. (Es como un if pero mas largo)
// La sintaxis del switch es la siguiente:
// switch (condición(true)) {
//     case 1:
        //código a ejecutar si la condición es igual a 1
//         break;
//     case 2:
         //código a ejecutar si la condición es igual a 2
//         break;
//     default:
         //código a ejecutar si la condición no se cumple
//         break;
// }
//
// Ejemplo:

//? Piedra papel o tijera con switch

function piedraPapelTijera(eleccionUsuario){
    var eleccionmaquina = "tijera";

    switch (true){

        //case "empate":
        case eleccionUsuario === eleccionmaquina:
            console.log("Empate");
            break;

        //case "ganaste":
        case eleccionUsuario === "piedra":
            console.log("Ganaste");
            break;

        //case "perdiste":
        case eleccionUsuario === "papel":
            console.log("Perdiste");
            break;
        
        default:
            console.log("opcion no valida");
            break;
    }
}

//llamada a la función
var eleccionUsuario = "tijera";
piedraPapelTijera(eleccionUsuario);
    