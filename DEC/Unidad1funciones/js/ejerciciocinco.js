let preciocasa = parseInt(prompt("Ingrese el precio de la casa:"));
let dinerobanco = parseInt(prompt("Ingrese el dinero que le va a pedir al banco:"));
let meses = parseInt(prompt("Ingrese los años en los que lo va a devolver:"));
let interes = parseInt(prompt("Ingrese el porcentaje de interés que se aplica:"));


const cuota= preciocasa/ (((1-(1+interes)**-meses)));
const pagado= preciocasa * meses;
const interespagados= dinerobanco-preciocasa;

console.log('Vas a pagar una cantidad de'+preciocasa+ 'ya con intereses en'+ interes+'mensualidades con un importe mensual de '+dinerobanco);
for (let index = 0; index < meses; index++) {
          console.log('Pago correspondiente al mes'+index[i]+'con una cantidad de'+cuota);
          
}