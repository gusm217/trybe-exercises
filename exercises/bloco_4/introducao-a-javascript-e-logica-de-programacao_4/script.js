// ------------ PARTE 1 ------------

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log(`Bem vinda, ${info.personagem}`)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';

console.log(info)

//3 - Faça um for/in que mostre todas as chaves do objeto.

for (let index in info) {
    console.log(index)
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let index in info) {
    console.log(info[index])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Ambos recorrentes'
  };

for (let index in info) { 
    for (let j in info2) {
        if(j === info2.recorrente) {
            console.log(info2.recorrente[j])
            break
        } else {
        console.log(`${info[index]} e ${info2[index]}`)
        break
        }
    }

}


// ------------- PARTE 2 --------------
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// NÃO CONSEGUI =/

function palindrome(word) {    
    for (let index = 0; index < word.length; index += 1) {
        let position = position - (word.length - 1);
        if (index === position) {
            return  true
        }
    }
    return false;
}

console.log(palindrome('arara'));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. NÃO CONEGUI =/

function aparecido(array) {
    let objectCounter = []
    let count = 0;
    for (let index in array) {        
        for (let j in array) {
            if (array[index] === array[j]) {
                count += 1;
            }
            object = {
                index: count
            }
            objectCounter.push(object);
        }
    }
    return objectCounter;
}

console.log(aparecido([5, 2, 5, 2, 10, 8, 8, 8, 7]));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function itSelf(number) {
    let sum = 0;
    for (let index = 1; index <= number; index += 1) {
        sum += index;
    }
    return sum;
}

console.log(itSelf(7));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifyWord(word, ending) {
    if (word.length > ending.length) {
        return true;
    }
    return false;
}

console.log(verifyWord('trybe', 'lasjdfjasdf'));