const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 4 - myFizzBuzz', () => {
  test('Verifica se o num é divisível por 3 e 5 e retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  test('Verifica se num é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })

  test('Verifica se num é divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })

  test('Verifica se num NÃO é divisível por 3 e 5', () => {
    expect(myFizzBuzz(4)).toBe[4]
  })

  test('Verifica se num não é um número e retorna o esperado', () => {
    expect(myFizzBuzz('a')).toBe(false)
  })
})