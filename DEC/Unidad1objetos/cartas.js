
function carta(nombre, valor, imagen) {
  this.nombre = nombre;
  this.valor = valor;
  this.imagen = imagen;
}

var baraja = [];
var palos = ["c", "p", "t", "d"];
for (var i = 0; i < palos.length; i++) {
  for (var j = 1; j <= 12; j++) {
    baraja[baraja.length] = { p: palos[i], v: j };
    baraja= new carta(palos[i],j,"imagen");
    console.log(baraja);
  }
}