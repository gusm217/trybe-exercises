const cepModel = require('../models/cepModel')

const getCep = async (cep) => {
  const fetchCep = cepModel.getCep(cep);

  return fetchCep;
}

module.exports = {
  getCep,
}