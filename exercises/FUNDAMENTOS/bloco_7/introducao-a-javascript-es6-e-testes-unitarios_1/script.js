// PARTE 1
// 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `ifScope ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
};

testingScope(false);

// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderedArray = () =>
  ` "Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!".`;

console.log(orderedArray());

// PARTE 2
// 1
const fatorial = (num) => {
  let fat = 0;
  for (let index = num; index >= 1; index -= 1) {
    fat += num * (index - 1);
  }
  return fat;
};

console.log(fatorial(4));
// // usando ternary
// const fat = 0;
// const fatorial = (num) => num > 0 ? fat += num

// 2
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'

const maiorPalavra = (frase) => {
  let array = [];
  const palavras = frase.split(" ");
  array.push(palavras);
  let aMaior = "";
  for (let palavra in array) {
    if (palavra.split("") > aMaior) {
      aMaior = palavra;
    }
  }

  return aMaior;
};
console.log(maiorPalavra("Hoje eu acordei e escovei os dentes"));
