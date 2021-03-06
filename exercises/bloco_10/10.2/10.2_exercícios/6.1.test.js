const { test, expect } = require('@jest/globals')

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (nome) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
    const animal = Animals.find((animalName => animalName.name === nome));
    if (animal !== 0) {
      return resolve(animal)
    }
      return reject({error: 'Nenhum animal com esse nome!'});
    }, 100);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  findAnimalByName(name)
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Verifica se existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});