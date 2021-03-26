let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
for (let i = 0; i < numbers.length; i+=1) {
    console.log(numbers[i])
}

// 2
let  soma = 0
for (let i = 0; i < numbers.length; i+=1) {
    soma = soma + numbers[i]    
}
console.log(soma)

// 3
let mediaAri;
for (let i = 0; i < numbers.length; i+=1) {
    soma = soma + numbers[i];
    if(i ==  9) {
        mediaAri = soma / 10
    }    
}
console.log(mediaAri);

// 4
if (mediaAri >= 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
    
}

// 5
let maiorValor = 0
for (let i = 0; i < numbers.length; i+=1) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i]
    }
}
console.log(maiorValor)

// 6
let impares = 0
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] % 2 != 0) {
        impares += 1
    } else if (impares == 0){
        console.log('Nenhum valor impar encontrado')
    }

}
console.log(impares)

// 7
let  menorValor = 200;

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i]
    }
}
console.log(menorValor)

// 8
let newArray =  []

for (let i = 1; i < 26; i += 1) {
    newArray.push(i)
}

console.log(newArray)
