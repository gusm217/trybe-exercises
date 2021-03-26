let a = 2;
let b = 3;
let c = 5;

// 1
let adicao = a + b;
console.log(adicao)
let subtracao = a - b;
console.log(subtracao)
let  multiplicacao = a * b;
console.log(multiplicacao)
let  divisao = a / b;
console.log(divisao)
let  modulo = a % b;
console.log(modulo)

// 2
if (a > b) {
    console.log(a)
}
else {
    console.log(b)
}

// 3
if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)
}
else {
    console.log(c)
}

// 4
if (a >= 0) {
    console.log("Positivo")
}
else {
    console.log("Negativo")
}

// 5
let ladosTriangulo = [70, 30 ,70]
// let somaLados = 
// A SE PENSAR 

// if (somaLados ===  180 && ladosTriangulo >= 0){
//     console.log(true)
// }
// else {
//     console.log("Lados não positvos ou ultrapassam os limites de um triângulo")

// }


//  6 Aproveitar este exemplo pra treinar a criação de algoritmos do dia 4.3

// - Como vou precisar receber o nome de uma peça em uma lista  que irá me devolver o movimento de acordo com a peça escolhida, uilizarei o swtich com as cases.
// - Crio uma variável que será responsável por segurar este nome da peça.
// - Crio o switch passando ela como parâmetro. 
// - Utilizo da função toLowerCase para fazer com que a função switch não diferencie os caracteres no parametro
// - Feito os cases de  cada  peça e seus respectivos movimentos em console log, finalizo com uma mensagem de erro,se não houver nas opções a peça escolhida

let xadrez = "Legolas"

switch (xadrez.toLowerCase()) {
    case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
    case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
    case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
    default: console.log("Not an option")

}

// 7 - também treinando algoritmo do exercicio 4.3
// - Precisarei fazer uma comparação de acordo com os valores de entrada, portanto if/else seria o mais apropriado
// - Monto minhas condições passando os parâmetros de comparação e retornando como resposta os respectivas  letras de A a F.
// Ao fim, fala que deve-se encerrar o programa se for dada a entrada de um numero menor q 0 ou maior q 100, o que leva a pensar em uma estrututra de repetição como while, em que se repetirá até haver uma condição fora que seja o break.





