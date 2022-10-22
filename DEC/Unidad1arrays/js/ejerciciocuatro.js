let baraja=[];
baraja.push("1C","2C","3C","4C","JC","QC","KC");
baraja.push("1D","2D","3D","4D","JD","QD","KD");
baraja.push("1R","2R","3R","4R","JR","QR","KR");
baraja.push("1P","2P","3P","4P","JP","QP","KP");

var barajaaleatoria = _.shuffle(baraja);
console.log(barajaaleatoria);