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

function centrarElemento(elemento, left, top) {
    elemento.style.position = 'absolute';
    elemento.style.left = left + 'px';
    elemento.style.top = top + 'px';
}

function cambiarTamanioElemento(elemento, ancho, altura, fontSize) {
    elemento.style.width = ancho + 'px';
    elemento.style.height = altura + 'px';
    elemento.style.fontSize = fontSize + 'px';
}

function moverElemento(elemento, repeticiones) {
    let contador = 0;

    const moverYCambiarTamanio = () => {
        contador++;
        const x = Math.floor(Math.random() * (window.innerWidth - 150));
        const y = Math.floor(Math.random() * (window.innerHeight - 150));

        centrarElemento(elemento.elemento, x, y);

        if (contador < repeticiones) {
            setTimeout(moverYCambiarTamanio, 500);
        } else {
            centrarElemento(elemento.elemento, elemento.posicion.left, elemento.posicion.top);
            cambiarTamanioElemento(elemento.elemento, elemento.dimensiones.ancho, elemento.dimensiones.altura, elemento.dimensiones.tamanioTexto);
            console.log('Fin del movimiento');
        }
    };

    elemento.elemento.addEventListener('mouseover', moverYCambiarTamanio, { once: true });
}

function clickBoton(boton) {
    return new Promise((resolve) => {
        boton.addEventListener('click', () => {
            resolve();
        }, { once: true });
    });
}

const text1 = document.getElementById('texto');
const boton1 = obtenerPropiedadesElemento('botonOne');
const boton2 = obtenerPropiedadesElemento('botonTwo');

clickBoton(boton1.elemento).then(() => {
    console.log('CLICK en Boton 1');
    pantalla1();
});

clickBoton(boton2.elemento).then(() => {
    console.log('CLICK en Boton 2');
    pantalla2();
});

function pantalla1() {
    centrarElemento(text1, boton1.posicion.left, boton1.posicion.top - 35);
    text1.innerHTML = "¿Segura que me amas?";
    moverElemento(boton2, 5);
}

function pantalla2() {
    centrarElemento(text1, boton2.posicion.left, boton2.posicion.top - 35);
    text1.innerHTML = "¿No me amas?";
    moverElemento(boton2, 12);
}
