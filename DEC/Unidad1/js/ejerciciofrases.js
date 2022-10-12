let frase;
do {
  frase = prompt("frase: ");
} while (frase.length < 10);
console.log(frase);

let palabras = frase.split(" ");
let frases = frase.split(", ");
if (frase.length > 10) {
          alert("El dato introducido tiene: "+frase.length+"letras "+palabras.length+"palabras "+frases.length+"frases")
}