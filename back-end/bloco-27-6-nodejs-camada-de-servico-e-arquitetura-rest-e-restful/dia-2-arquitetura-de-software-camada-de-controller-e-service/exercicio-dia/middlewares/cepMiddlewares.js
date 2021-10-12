function validateCep(req, res, next) {
  const { cep } = req.params;
  const regexToValidate = \d{5}-?\d{3};
  if(regexToValidate.test(cep)) {
    return res.status(400).json({ Error: "CEP inválido"});    
  }
  next();
}

module.exports = { validateCep }