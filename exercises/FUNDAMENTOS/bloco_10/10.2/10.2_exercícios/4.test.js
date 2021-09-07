const { expect } = require('@jest/globals')
const getRepos = require('./4')

describe('Requisito 4 - fetch em uma url do github pra ver se encontra alguns repos', () => {
  it('Verify if it contains two repos', async () => {
    expect.assertions(2);
    const isRepo = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(isRepo).toContain('sd-01-week4-5-project-todo-list');
    expect(isRepo).toContain('sd-01-week4-5-project-meme-generator');
  })
})