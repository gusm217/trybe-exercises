const readline = require('readline-sync');
// console.log('Hello, world!');
const name = readline.question('Qual seu nome?');
const age = readline.questionInt('Qual sua idade?');

console.log(`Olá, ${name}!Sua idade é ${age}`);
