const { test, expect } = require('@jest/globals');
const { obj1, obj2, obj3 } = require('./objsJson');

describe('Requisito 5 - objetos', () => {
  test('Verifica se obj1 é idêntico a obj2', () => {
    expect(obj1 === obj2).toStrictEqual(false)
  })

  test('Verifica se obj2 é idêntico a obj3', () => {
    expect(obj2 === obj3).toStrictEqual(false)
  })

  test('Verifica se obj1 é idêntico a obj3', () => {
    expect(obj1 === obj3).toStrictEqual(false)
  })
  // poderia fazer assim tb
  test('Testando pra ver se consigo passar a verificação dos 3', () => {
    expect(obj1 === obj2 === obj3).toStrictEqual(false)
  })
})