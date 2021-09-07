const { test, expect } = require('@jest/globals')

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (idade) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
    const animal = Animals.find((animalName => animalName.age === idade));
    if (animal !== 0) {
      let animalArray = [];
      return resolve(animalArray.push(animal))
    }
      return reject({error: 'Nenhum animal com essa idade!'});
    }, 100);
  })
);

const getAnimal = (age) => {
  // Adicione o código aqui.
  findAnimalByAge(age);
};
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Verifica se existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});