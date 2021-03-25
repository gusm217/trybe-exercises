let a;
let b;
let c;

let lado1;
let lado2;
let lado3;
let somaLados = lado1 + lado2 + lado3;


// 1
let adicao = a + b;
let subtracao = a - b;
let  multiplicacao = a * b;
let  divisao = a / b;
let  modulo = a % b;

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

if (somaLados ===  180){
    console.log(true)
}
else {
    console.log("Lados não positvos ou ultrapassam os limites de um triângulo")

}


//  6
let xadrez = Cavalo.toLowerCase()

switch (xadrez) {
    case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
    case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
    case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;

}

