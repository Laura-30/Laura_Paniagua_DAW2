const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//ascendente
for (let i = 0; i < ages.length; i++) {
  for (let j = 0; j < ages.length - 1 - i; j++) {
    if (ages[j] > ages[j + 1]) {
      let num = ages[j];
      ages[j] = ages[j + 1];
      ages[j + 1] = num;
    }
  }
}
console.log(ages);
//descendente
for (let i = 0; i < ages.length; i++) {
  for (let j = 0; j < ages.length - 1 - i; j++) {
    if (ages[j] < ages[j + 1]) {
      let num = ages[j];
      ages[j] = ages[j + 1];
      ages[j + 1] = num;
    }
  }
}
console.log(ages);

//media
let media = 0;
for (let index = 0; index < ages.length; index++) {
  media = media + ages[index];
}
media = media / ages.length;
console.log(media);