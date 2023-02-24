

function capturar(){
  let capturandoA = "";
  let capturandoB = "";
  let capturandoC = "";
  let capturandoD = "";


    capturandoA = document.getElementById('numA').value; 
    capturandoB = document.getElementById('numB').value;
    capturandoC = document.getElementById('numC').value;
    capturandoD = document.getElementById('numD').value;
    document.getElementById('num1').innerHTML = capturandoA;
    document.getElementById('num2').innerHTML = capturandoB;
    document.getElementById('num3').innerHTML =capturandoC;
    document.getElementById('num4').innerHTML = capturandoD;

}
window.addEventListener("load", capturar);
