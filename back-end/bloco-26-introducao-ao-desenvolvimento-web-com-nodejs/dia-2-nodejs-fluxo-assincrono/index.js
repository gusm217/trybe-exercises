const fs = require('fs').promises;
// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

// function numsPromise (num1, num2, num3) {
//   const resultado = ((num1 + num2) * num3)
//   const promise = new Promise((resolve, reject) => {
//     if (num1 === String || num2 === String || num3 === String) {
//       reject(new Error("Informe apenas números"))
//     } else if (resultado < 50) {
//       reject(new Error("Valor muito baixo"))
//     }
//     resolve(resultado); 
//   })
//   return promise;
// }

// numsPromise(1, 2, 25)
//   .then(res => console.log(res))
//   .catch(er => console.log(er))

// 2 - Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// function randomNum() {
//   let num1 = Math.floor(Math.random() * 100 + 1)
//   let num2 = Math.floor(Math.random() * 100 + 1)
//   let num3 = Math.floor(Math.random() * 100 + 1) 
//   const promise = new Promise ((resolve, reject) => {
//     if(num3 === 0) reject(new Error("Não pode ser zero"))   
//     resolve((num1 + num2) * num3)
//   })

//   return promise
// }

// randomNum()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// 3 - Reescreva o código do exercício anterior para que utilize async/await.

// async function randomNum() {
//   let num1 = Math.floor(Math.random() * 100 + 1)
//   let num2 = Math.floor(Math.random() * 100 + 1)
//   let num3 = Math.floor(Math.random() * 100 + 1) 
//   const resultado = ((num1 + num2) * num3)
//   try {
//     await console.log(resultado)
//   } catch (err) {
//     return console.log(err)
//   }  
// }

// randomNum()

// 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.




// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// function simpsons() {
//   const lendo = fs.readFile('./simpsons.json', 'utf-8')
//     .then(data => JSON.parse(data).forEach(({id, name}) => console.log(`${id} - ${name}`)))
//     .catch(err => console.log(err))
// }

// simpsons();

// function findingCharacter(idChar) {
//   const promise = new Promise ((reject, resolve) => {
//   fs.readFile('./simpsons.json', 'utf-8')
//   .then((data) => {
//   const char = JSON.parse(data).find(({id}) => idChar === id)
//   if(!char) {
//   return reject('id não encontrado')
//   }  
//   resolve(char)
//   })

//   .catch(reject);  
//   }
// )};

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// findingCharacter(3);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// function removingChars() {
//   fs.readFile('./simpsons.json', 'utf-8')
//     .then((data) => {
//       const filtered = JSON.parse(data).filter(({id}) => id !== 10 && id !== 6)
//       return fs.writeFile('./simpsons.json', JSON.stringify(filtered))
//     })
//     .catch(console.error)
// }

// removingChars();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// function newSimpsonsFamily() {
//   fs.readFile('./simpsons.json', 'utf-8')
//     .then((data) => {
//       const filtered = JSON.parse(data).filter(({id}) => id <= 4)
//       fs.writeFile('./simpsonFamily.json', JSON.stringify(filtered), {flag: 'wx'})
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// newSimpsonsFamily();


