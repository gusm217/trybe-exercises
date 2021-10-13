const cepServices = require('../services/cepServices')
const rescue = require('express-rescue');
const Joi = require('joi');

const getCep = rescue( async (req, res) => {
  const { cep } = req.params;

  if(cep === null) {
    return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
  };  

  await res.status(200).json(cepServices.getCep(cep));
});

const createCep = rescue(async (req, res, next) => {
  const cepRegex = /\d{5}-\d{3}/g

  const { error } = Joi.object ({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  })

  if(error) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": error } })
  }

})

module.exports = {
  getCep,
}
