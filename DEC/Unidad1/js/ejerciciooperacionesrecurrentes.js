let num1, num2;
num1 = parseInt(prompt("Ingrese el primer número:"));
if (num1 < 0) {
  alert("ERROR");
}
num2 = parseInt(prompt("Ingrese el segundo número:"));
if (num1 < 0) {
  alert("ERROR");
}
if(confirm("¿Quieres hacer las operaciones?")){

          sumar();
          temporizadorDeRetraso();
          restar();
          temporizadorDeRetraso();
          multiplicar();
          temporizadorDeRetraso();
          dividir();
}else{

}

let tiempodeespera;

function temporizadorDeRetraso() {
  tiempodeespera = setTimeout(funcionConRetraso, 2000);
}
function funcionConRetraso() {
  console.log("Han pasado 2 segundos.");
}

function sumar() {
       let resultadosumar = num1 + num2;
       if (resultadosumar < 0) {
         
       }
       console.log(resultadosumar);   
}
function restar() {
  let resultadorestar = num1 - num2;
  if (resultadorestar < 0) {
    
  }
  console.log(resultadorestar);
}
function multiplicar() {
  let resultadomulti = num1 * num2;
  if (resultadomulti < 0) {
    
  }
  console.log(resultadomulti);
}
function dividir() {
  let resultadodiv = num1 / num2;
  if (resultadodiv < 0) {
    
  }
  console.log(resultadodiv);
}



