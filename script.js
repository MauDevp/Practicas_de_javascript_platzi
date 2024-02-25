
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


// form.addEventListener('submit', sumarInputValues);

// calculo1.value=0;
// calculo2.value=0;

// function sumarInputValues(event){
//     // console.log({event});
//     event.preventDefault();
//     let valor1 = Number(calculo1.value);
//     let valor2 = Number(calculo2.value);
//     result.innerText="El resultado es: " + (valor1 + valor2);
// }

// btn.addEventListener('click', sumarInputValues);

// calculo1.value=0;
// calculo2.value=0;

// function sumarInputValues(event){
//     // console.log({event});
//     // event.preventDefault();
//     let valor1 = Number(calculo1.value);
//     let valor2 = Number(calculo2.value);
//     result.innerText="El resultado es: " + (valor1 + valor2);
// }

calculo1.value=0;
calculo2.value=0;

let sumarInputValues = event => {
    let valor1 = Number(calculo1.value);
    let valor2 = Number(calculo2.value);
    result.innerText="El resultado es: " + (valor1 + valor2);
}

btn.addEventListener('click', sumarInputValues);
