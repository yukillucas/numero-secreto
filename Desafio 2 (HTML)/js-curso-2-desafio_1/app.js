let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let ndobro = resultado(6);

function resultado(a) {
     return (a*2);
}

function numeroDobro() {
  console.log(ndobro);
}

let media = mediana(3,4,5);

function mediana(a,b,c) {
    return (a + b + c) / 3;
}

function numeroMedia() {
  console.log(media);
}

let nMaior = calculoMaior(21,10);

function calculoMaior(a,b) {
  return a > b ? a : b;
}

function numeroMaior() {
   console.log(nMaior)
}

let nmultiplicação = calculoMultiplicação(7);

function calculoMultiplicação(a) {
  return a * a
}

function numeroMultiplicação() {
    console.log(nmultiplicação)
}