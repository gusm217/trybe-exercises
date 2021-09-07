const { test, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Requisito 1 - testa função sum', () => {
  test('Testa se passando 2 e 3 é igual a 5', () => {
    expect(sum(2, 3)).toBe(5);
  })

  test('Testa se passando um dos valores não sendo número, gera erro', () => {
    expect(() => { sum('2', 4) }).toThrow();
  })

  test('Testa se um valor não number gera o erro: parameters must be numbers', () => {
    expect(() => { sum(5, '1') }).toThrowError(new Error('parameters must be numbers'))
  })  
});