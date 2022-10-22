const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//while
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
//for
for (let index = 0; index < array.length; index++) {
  const elemento = array[index];
  console.log(elemento);
}

//foreach
array.forEach((array, index) => {
  console.log( array);
});

//suma
for (let index = 0; index < array.length; index++) {
  const elemento = array[index];
  console.log(elemento+1);
}

//media
let media=0;
for (let index = 0; index < array.length; index++) {
  media = media + array[index];
}
media = media / array.length;
console.log(media);