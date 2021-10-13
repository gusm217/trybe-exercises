const router = require('express').Router();
const { validateCep } = require('../middlewares/cepMiddlewares');
const cepController = require('../controllers/cepController')

router.get('/:cep', validateCep, cepController.getCep);

module.exports = router