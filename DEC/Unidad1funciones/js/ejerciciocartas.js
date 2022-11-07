var baraja = [];
var palos = ["c", "p", "t", "d"];
for (var i = 0; i < palos.length; i++) {
  for (var j = 1; j <= 12; j++) {
    baraja[baraja.length] = { p: palos[i], v: j };
  }
}
function sacarcarta() {
  console.log(baraja[Math.floor(Math.random() * baraja.length)]);        
}
function obtenerInformacion(carta) {
  if (carta<=baraja.length()) {
     prompt('La carta es'+baraja[carta]);     
  }else{
     prompt('no existe');     
  }        
         
}

sacarcarta();
obtenerInformacion(2);