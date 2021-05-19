const { test, expect } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('Requisito 2 - utilizando a função myRemove', () => {
  test('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 2)).toEqual([1, 3, 4])
  })

  test('Verifica se NÃO retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4])
  })

  test('Verifica se o array passado não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4])
  })

  test('Verifica se passando item 5, retorna o esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})