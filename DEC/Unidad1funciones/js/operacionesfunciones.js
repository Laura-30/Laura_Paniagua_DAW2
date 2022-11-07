
function suma(num1,num2) {
  var resultadosuma = num1 + num2;
  if (resultadosuma < 0) {
  }
 window.alert(resultadosuma);
}
function resta(num1,num2) {
  var resultadoresta = num1 - num2;
  if (resultadoresta < 0) {
  }
  window.alert(resultadoresta);
}
function multiplicar(num1,num2) {
  var resultadomul = num1 * num2;
  if (resultadomul < 0) {
  }
  window.alert(resultadomul);
}
function dividir(num1,num2) {
  var resultadodiv = num1 / num2;
  if (resultadodiv < 0) {
  }
  window.alert(resultadodiv);
}

let num1, num2;
num1 = parseInt(prompt("Ingrese el primer número:"));
if (num1 < 0 || num1 == null) {
  alert("ERROR");
}
num2 = parseInt(prompt("Ingrese el segundo número:"));
if (num2 < 0 || num2 == null) {
  alert("ERROR");
}
let resultado = 0;
let opcion = 0;
do {
  prompt("1: suma, 2:resta, 3:multiplicación, 4:división, 5:salir");
  opcion = parseInt(prompt("Ingrese una opción:"));
  switch (opcion) {
    case 1:
      suma(num1, num2);
      break;
    case 2:
      resta(num1, num2);
      break;
    case 3:
      multiplicar(num1, num2);
      break;
    case 4:
      dividir(num1, num2);
      break;

    default:
      break;
  }
} while (opcion != 5);