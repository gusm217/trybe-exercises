const router = require('express').Router();
const cepContoller = require('../controllers/cepController')

router.get('/:cep', cepContoller);

module.exports = router