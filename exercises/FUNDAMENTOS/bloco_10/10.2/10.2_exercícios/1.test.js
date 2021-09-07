const { expect } = require('@jest/globals');
const uppercase = require('./1');

describe('Requisito 1 - uppercase', () => {
  it('Verifica se uppercase retorna a callback', () => {
    expect.hasAssertions()
    uppercase('lalala', (param) => {
      expect(param).toBe('LALALA');
    })
  })
})