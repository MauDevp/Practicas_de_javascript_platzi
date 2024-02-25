// h1 { color: red;}
// .parrafito{ ... }
// #pid{ ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML="Patito <br> Feo"; //NOTE - Agrega HTML
h1.innerText="Patito <br> Feo"; //NOTE - Agrega Texto y es mas seguro
// h1.setAttribute('class', 'rojo'); //NOTE - establece un atributo
// console.log(h1.getAttribute('class')); //NOTE - Obtiene el valor de la clase
h1.classList.add('rojo'); //NOTE - agrega un valor a la clase
h1.classList.remove('verde'); //NOTE - remueve un valor de la clase
// h1.classList.toggle('verde'); //NOTE - investigar
// h1.classList.contains('verde'); //NOTE - investigar
input.value='123'; //NOTE - cambia el valor del input

const img = document.createElement('img'); //NOTE - crea elementos en el html

img.setAttribute('src', './banner-GitHub.jpg'); //NOTE - establece un atributo

console.log(img);

pid.innerHTML="";
pid.append(img); //NOTE - agrega un elemento a el elemento


