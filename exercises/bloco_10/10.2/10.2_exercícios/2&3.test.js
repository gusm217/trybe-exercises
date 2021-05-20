const { test, expect } = require('@jest/globals')
const getUserName = require('./2&3.js')

// UTILIZANDO PROMISE
describe('Requisito 2 - função getUserName simulando uma chamada', () => {
  test('Verfifica se retorna o name do usuário a partir do seu id', () => {
    expect.assertions(1);
    return getUserName('4').then(username => {
      expect(username).toEqual('Mark')      
    })
  })

  test('Verfifica se retorna o name do usuário a partir do seu id', () => {
    expect.assertions(1);
    return getUserName('5').then(username => {
      expect(username).toEqual('Paul')      
    })
  })

  test('Verifica se passando um valor inexistente', () => {
    expect.assertions(1);
    return getUserName('3').catch(error => {
      expect(error).toEqual({error: 'User with 3 not found.'})
    })
  })
})

// UTILIZANDO ASYNC/AWAIT
describe('Requisito 3 - função getUserName simulando uma chamada', () => {
  test('Verfifica se retorna o name do usuário a partir do seu id', async () => {
    expect.assertions(1);
    const username = await getUserName('4');
    expect(username).toEqual('Mark')      
  })

  test('Verfifica se retorna o name do usuário a partir do seu id', async () => {
    expect.assertions(1);
    const username = await getUserName('5');
    expect(username).toEqual('Paul')      
  })

  test('Verifica se passando um valor inexistente', async () => {
    expect.hasAssertions();
    try {
      await getUserName('3');
    } catch(error) {
      expect(error).toEqual({error: 'User with 3 not found.'})
    }
  })
})