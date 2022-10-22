let lista = [];
for (let i = 0; i < 20; i++) {
  let random = Math.random();
  random = random * 10 + 1;
  random = Math.trunc(random);
  lista[i] = random;
}
console.log(lista);

//pares

for (let i = 0; i < 20; i++) {
          if((lista[i]%2)==0){
          console.log(lista[i]);
          }
}

//numero max
let numMax= Math.max.apply(null,lista);
console.log('Numero max: '+numMax);
//numero min
let numMin = Math.min.apply(null, lista);
console.log("Numero max: " + numMin);
//media
let media = 0;
for (let index = 0; index < 20; index++) {
  media = media + lista[index];
}
media = media / lista.length;
console.log(media);