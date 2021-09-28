const { expect } = require('chai');

const { soma } = require('./somaFunc');
// seguindo a regra de que só pode ser maior ou igual a 7 para aprovado
describre('Se a soma for menor que 7', () => {
  it('retorna reprovado', () => {
    const resultado = soma(2,3)

    expect(resultado).equals('Reprovado')
  })
});

describre('Se a soma for maior ou igual a 7', () => {
  it('deverá retornar aprovado', () => {
    const resultado = soma(5,2)

    expect(resultado).equals('Aprovado')
  })
});

// npx mocha --reporter=nyan tests/readFile.js 