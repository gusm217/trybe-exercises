const { test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Requisito 3 - myRemoveWithoutcopy', () => {
  test('Verifica se retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  test('Verifica se NÃO retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  test('Verifica se passando 5, retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})