const cepModel = require('../models/cepModel')

const getCep = async (cep) => {
  const fetchCep = cepModel.getCep(cep);

  return fetchCep;
}

const createCep =  async (cep, logradouro, bairro, localidade, uf) => {
  const newCep = cepModel.getCep(cep, logradouro, bairro, localidade, uf);

  if(cep )
  
  return newCep;
}

module.exports = {
  getCep,
}