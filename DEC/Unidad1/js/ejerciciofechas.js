let dia = prompt("Introduce el día de tu cumpleaños");
let mes = prompt("Introduce el mes de tu cumpleaños");
let año = prompt("Introduce el año de tu cumpleaños");
var fechacumple=dia+"/"+mes+"/"+año;
var Fecha1 = new Date(fechacumple);;
var Fecha2 = new Date().getTime();


 var diff = Fecha2 - Fecha1;

 console.log(diff / (1000 * 60 * 60 * 24));




