
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let nome =document.getElementById('nome');
let mes = document.getElementById('mes');

let numA = document.getElementById('numA');
let numB = document.getElementById('numB');
let numC = document.getElementById('numC');
let numD = document.getElementById('numD');
let form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function capturar(){
  let capturando = "";

    capturando = document.getElementById('numA').value; 
    document.getElementById('num1').innerHTML = capturando;

}
