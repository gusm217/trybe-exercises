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
let nota = 101;

if (nota < 0 || nota > 100) {
    console.log("Nota inválida")
}
if (nota >= 90)  {
    console.log("A");
}
else if (nota >= 80 ) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50 ) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}
// OBSERVAÇÃO: Ao utilizar if, ele obrigatóriamente mira no if como sendo a primeira função a observar. No caso, coloquei o primeiro e o segundo com ifs para testar e como duas funções 'primárias' foram atendidas, ele foi na segunda.

// 8
// - 3 variáveis no começo do programa
// - Utilizar um if q irá retornar true se pelo menos um deles for ímpar.
// - caso não, retorna falso.

let num1 = 5;
let num2 = 2;
let num3 = 10;

if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 !=0) {
    console.log(true)
}
else {
    console.log(false)
}

// 9 - mesmo do 8, porém com par

// 10
// - duas váriáveis: 1 custo do produto, 1 valor de venda
// quantidade de produtos = 1000
// imposto sobre o produto de 20%
// emitir mensagem de erro e terminar se algum dos inputs forem menor q 0
// montar as equações  de valorCustoTotal e lucro

let custoProduto = 5;
let precoVenda = 13;
let impostoSobreOProduto = custoProduto * 0.2;
let valorCustoTotal = custoProduto + impostoSobreOProduto;
let lucroTotal= (precoVenda - valorCustoTotal) * 1000;


if(custoProduto <= 0 || precoVenda <= 0) {
    console.log("Valores inválidos")    
}

console.log('O lucro total foi de: ' + lucroTotal)

// 11
let salario = 2670;
let descontoINSS;
let descontoIR;

// INSS
if (salario <= 1556.94) {
    descontoINSS = salario * 0.08
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    descontoINSS = salario * 0.09
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    descontoINSS = salario * 0.11
}
else if (salario > 5189.92) {
    descontoINSS = 570.88
}

// IR ja deduzindo parcela imposto
if (salario >= 1903.99 && salario <= 2826.65) {
    descontoIR = salario * 0.075 - 142.80
}
else if (salario >= 2.826,66 && salario <= 3.751,05) [
    descontoIR = salario * 0.15 - 354.80
]
else if (salario >= 3.751,06 && salario <= 4.664,68) {
    descontoIR = salario * 0.225 - 636.13

}
else if (salario >= 4.664,68 ) {
    descontoIR = salario * 0.275 - 869.36
}

salarioLíquido = salario - descontoINSS - descontoIR

console.log(descontoIR)
console.log(descontoINSS)
console.log(salarioLíquido)



