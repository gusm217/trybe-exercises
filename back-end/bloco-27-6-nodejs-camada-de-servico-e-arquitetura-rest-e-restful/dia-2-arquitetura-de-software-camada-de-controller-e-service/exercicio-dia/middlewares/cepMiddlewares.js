function validateCep(req, res, next) {
  const { cep } = req.params;
  const regexToValidate = /\d{5}-?\d{3}/g
  if(!regexToValidate.test(cep)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });    
  }
  next();
}

function validateCreateCep(req, res, next) {
  const { cep } = req.body;
  const regexToValidate = /\d{5}-\d{3}/g
  if(!cepRegex.test(cep)){
    res.status(400).json({ message: 'cep inválido. Deve conte 9 dígitos e traço'})
  }
  
  next();
}

module.exports = { 
  validateCep,
  validateCreateCep, 
}