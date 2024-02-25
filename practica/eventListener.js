// Función para obtener las propiedades de un elemento
function obtenerPropiedadesElemento(id) {
    const elemento = document.getElementById(id);
    const rect = elemento.getBoundingClientRect();
    const estilo = window.getComputedStyle(elemento);
    return {
        elemento,
        posicion: {
            left: rect.left,
            top: rect.top
        },
        dimensiones: {
            ancho: elemento.offsetWidth,
            altura: elemento.offsetHeight,
            tamanioTexto: parseFloat(estilo.fontSize)
        }
    };
}


// Declaración de mis elementos de HTML en variables
const text1 = document.getElementById('texto');
const boton1 = obtenerPropiedadesElemento('botonOne');
const boton2 = obtenerPropiedadesElemento('botonTwo');

// Obtener la posición de los botones
const posicionBtn1 = boton1.posicion;
const posicionBtn2 = boton2.posicion;
const posicion_text1 = text1.getBoundingClientRect();

// Obtener las dimensiones de los botones
const { ancho: anchoElemento1, altura: alturaElemento1, tamanioTexto: tamanioTextoElemento1 } = boton1.dimensiones;
const { ancho: anchoElemento2, altura: alturaElemento2, tamanioTexto: tamanioTextoElemento2 } = boton2.dimensiones;

// Obtener dimensiones de la ventana y almacenarla en variables
const ancho = window.innerWidth;
const alto = window.innerHeight;

centrarBotones();

// Función para regresar el tamaño inicial de los elementos
function tamanioInicial(elemento1, elemento2) {
    elemento1.style.width = anchoElemento1 + 'px';
    elemento1.style.height = alturaElemento1 + 'px';
    elemento1.style.fontSize = tamanioTextoElemento1 + 'px';

    elemento2.style.width = anchoElemento2 + 'px';
    elemento2.style.height = alturaElemento2 + 'px';
    elemento2.style.fontSize = tamanioTextoElemento2 + 'px';
}

// Función para acomodar botones centrados
function centrarBotones() {
    text1.style.position = 'absolute';
    text1.style.left = posicion_text1.left + 'px';
    text1.style.top = posicion_text1.top - 35 + 'px';

    boton1.elemento.style.position = 'absolute';
    boton1.elemento.style.left = posicionBtn1.left + 'px';
    boton1.elemento.style.top = posicionBtn1.top + 'px';

    boton2.elemento.style.position = 'absolute';
    boton2.elemento.style.left = posicionBtn2.left + 'px';
    boton2.elemento.style.top = posicionBtn2.top + 'px';
}

// Función para cambiar el tamaño de los elementos
function cambiarTamanioElementos(contadorTamanio = 1, elemento1 = 'none', elemento2 = 'none') {
    if (elemento1 != 'none') {
        elemento1.elemento.style.width = (anchoElemento1 + (contadorTamanio * 12)) + 'px';
        elemento1.elemento.style.height = (alturaElemento1 + (contadorTamanio * 4)) + 'px';
        elemento1.elemento.style.fontSize = (tamanioTextoElemento1 + (contadorTamanio * 4)) + 'px';
    }
    if (elemento2 != 'none') {
        elemento2.elemento.style.width = (anchoElemento2 - (contadorTamanio * 7)) + 'px';
        elemento2.elemento.style.height = (alturaElemento2 - (contadorTamanio * 3.5)) + 'px';
        elemento2.elemento.style.fontSize = (tamanioTextoElemento1 - (contadorTamanio * 1.4)) + 'px';
    }
}

function clickBotones() {
    return new Promise((resolve) => {
        boton1.elemento.addEventListener('click', () => {
            resolve(1);
        }, { once: true });

        boton2.elemento.addEventListener('click', () => {
            resolve(2);
        }, { once: true });
    });
}

// Función para mover un elemento
function moverElemento(contador, elemento, repeticiones, elementoIncrease = 'none', elementoDecreases = 'none', func = 'none') {
    elemento.elemento.style.position = 'absolute';

    const moverYCambiarTamanio = () => {
        contador++;
        const x = Math.floor(Math.random() * (ancho - 150)); // Se asigna una posición aleatoria en el eje x
        const y = Math.floor(Math.random() * (alto - 150)); // Se asigna una posición aleatoria en el eje y

        elemento.elemento.style.left = x + 'px';    // Se asigna la posición aleatoria en el eje x
        elemento.elemento.style.top = y + 'px';    // Se asigna la posición aleatoria en el eje y

        if (elementoIncrease != 'none' || elementoDecreases != 'none') { // Si se asigna un elemento para aumentar o disminuir
            cambiarTamanioElementos(contador, elementoIncrease, elementoDecreases); // Se cambia el tamaño de los elementos
        }
        console.log('\n contador:' + contador + "\n");

        if (contador < repeticiones) {
            elemento.elemento.addEventListener('mouseover', moverYCambiarTamanio, { once: true });
        } else {
            // centrarBotones();
            console.log('fin');
            // if (func != 'none') { // Si se asigna una función
            //     func(boton1.elemento, boton2.elemento); // Se ejecuta la función
            // }
        }
    };//fin moverYCambiarTamanio

    elemento.elemento.addEventListener('mouseover', moverYCambiarTamanio, { once: true });
}


// Pantallas 1
function pantalla1(veces){
    click = 0;
    centrarBotones();
    text1.innerHTML = "¿Segura que me amas?";
    moverElemento(0, boton2, veces, 'none' ,'none', tamanioInicial);
    if(click == 1){
        pantalla1_1(5);
    }
    else if(click == 2){
        pantalla1_1(5);
    }
    else{
        console.log('Error');
    }
}
function pantalla1_2(veces){
    centrarBotones();
    text1.innerHTML = "¿Segurita, segurita?";
    moverElemento(0, boton2, veces, 'none' ,'none', tamanioInicial);
}
// Pantallas 2
function pantalla2(veces){
    centrarBotones();
    text1.innerHTML = "¿No me amas?";
    moverElemento(0, boton2, veces, 'none' , boton2, tamanioInicial);
}
function pantalla2_1(veces){
    centrarBotones();
    text1.innerHTML = "Ultima oportunidad, ¿Me amas?";
    moverElemento(0, boton2, veces, 'none' ,'none', tamanioInicial);
}

// // Evento para el botón 1 mouseover
moverElemento(0, boton1, 3);

let click = clickBotones();
let clicksPantallas = 0;

clickBotones().then((click) => {

    if(click == 1){
        console.log('CLICK 1 - ' + click);
        pantalla1(5);
    }
    else if(click == 2){
        pantalla2(12);
        console.log('CLICK 2');
    }

});






