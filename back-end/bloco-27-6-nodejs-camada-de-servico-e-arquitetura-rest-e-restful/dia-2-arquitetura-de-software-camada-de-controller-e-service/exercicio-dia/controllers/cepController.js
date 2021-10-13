const cepServices = require('../services/cepServices')
const rescue = require('express-rescue');

const getCep = rescue( async (req, res) => {
  const { cep } = req.params;

  if(cep === null) {
    return res.status(404).json({message: 'CEP not found'})
  };

  await res.status(200).json(cepServices.getCep(cep));
});

module.exports = {
  getCep,
}
