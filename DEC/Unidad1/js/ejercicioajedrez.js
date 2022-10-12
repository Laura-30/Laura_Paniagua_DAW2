var filaPar = "";
var filaImpar = "";
while (filaPar.length < 8) {
  if (filaPar.length % 2 === 0) {
    filaPar += "#";
    filaImpar += " ";
  }
  if (filaPar.length % 2 === 1) {
    filaImpar += "#";
    filaPar += " ";
  }
}
for (var i = 0; i < 4; i++) {
  console.log(filaPar + "\n");
  console.log(filaImpar + "\n");
}
