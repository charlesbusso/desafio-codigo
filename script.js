

function capturar(){
  let capturandoA = "";
  let capturandoB = "";
  let capturandoC = "";
  let capturandoD = "";
  let capturandoE = "";
  let capturandoF = "";


    capturandoA = document.getElementById('numA').value; 
    capturandoB = document.getElementById('numB').value;
    capturandoC = document.getElementById('numC').value;
    capturandoD = document.getElementById('numD').value;
    capturandoE = document.getElementById('ano').value;
    capturandoF = document.getElementById('name').value;
    document.getElementById('num1').innerHTML = capturandoA;
    document.getElementById('num2').innerHTML = capturandoB;
    document.getElementById('num3').innerHTML =capturandoC;
    document.getElementById('num4').innerHTML = capturandoD;
    document.getElementById('mes').innerHTML = capturandoE;
    document.getElementById('nome').innerHTML = capturandoF;

}
window.addEventListener("load", capturar);
