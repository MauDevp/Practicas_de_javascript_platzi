//función que recibe un parámetro del usuario y lo compara con la elección de la máquina
function piedraPapelTijera(eleccionUsuario){
    var elecionMaquina = "tijera";

    if(eleccionUsuario === elecionMaquina){
        console.log( "Empate");
    }else if(eleccionUsuario === "piedra"){
        console.log( "Ganaste");
    }else if(eleccionUsuario === "papel"){
        console.log( "Perdiste");
    }else{
        console.log( "Opcion no valida");
    }
}

//llamada a la función
var eleccionUsuario = "piedra";
piedraPapelTijera(eleccionUsuario);