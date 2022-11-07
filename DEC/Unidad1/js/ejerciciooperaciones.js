let num1, num2;
num1 = parseInt(prompt("Ingrese el primer número:"));
if (num1<0) {
    alert("ERROR");   
}
num2 = parseInt(prompt("Ingrese el segundo número:"));
if (num2 < 0) {
    alert("ERROR");
}
let resultado = 0;
let opcion=0;
do{
   prompt("1: suma, 2:resta, 3:multiplicación, 4:división, 5:salir");
   opcion = parseInt(prompt("Ingrese una opción:"));
   switch (opcion) {
     case 1:
       resultado = num1 + num2;
       if (resultado < 0) {
       }
       console.log(resultado);
       break;
     case 2:
       resultado = num1 - num2;
       if (resultado < 0) {
       }
       console.log(resultado);
       break;
     case 3:
       resultado = num1 * num2;
       if (resultado < 0) {
       }
       console.log(resultado);
       break;
     case 4:
       resultado = num1 / num2;
       if (resultado < 0) {
       }
       console.log(resultado);
       break;
     
     default:
       break;
   }
}while(opcion!=5);
