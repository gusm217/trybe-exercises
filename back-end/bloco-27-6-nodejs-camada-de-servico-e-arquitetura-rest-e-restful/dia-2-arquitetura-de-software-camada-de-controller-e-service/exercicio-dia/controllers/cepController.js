const { validateCep } = require('../middlewares/cepMiddlewares');
const cepServices = require('../services/cepServices')

const getCep('/:cep', validateCep, (req, res) => {
  const { cep } = req.params;

  if(cep === null) {
    return res.status(404).json({message: 'CEP not found'})
  };

  res.status(200).json(cepServices.getCep(cep))
})

