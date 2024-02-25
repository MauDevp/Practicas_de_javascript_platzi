// Función para obtener las propiedades de un elemento
function obtenerPropiedadesElemento(id) {
    const elemento = document.getElementById(id);
    const rect = elemento.getBoundingClientRect();
    const estilo = window.getComputedStyle(elemento);
    return {
        elemento: elemento,
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