
let filas = prompt("Cuantas filas quieres");
for (let i = 0; i < filas; i++) {
  let linea = "";
  for (let j = 0; j < i + 1; j++) {
    linea = linea + "*";
  }
  console.log(linea);
}
  


