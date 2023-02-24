

function capturar(){
  let capturandoA;
  let capturandoB;
  let capturandoC;
  let capturandoD;
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

    rotacao()

}
function rotacao(){
   let girar = "";
   let cartao = document.getElementById('cartao');
   if(girar === ""){
    cartao = 0;
   }else if(girar == value){
    cartao.style.rotate = "360";
   }
}
window.addEventListener('click', rotacao);
window.addEventListener("load", capturar);
