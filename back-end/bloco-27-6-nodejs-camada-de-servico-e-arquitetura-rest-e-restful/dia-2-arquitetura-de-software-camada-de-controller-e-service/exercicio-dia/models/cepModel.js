const connection = require('../connections/connectionMysql')

const getCep = async (cep) => {
  const query = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
  )
  if(!query) return null;
  return query;
}

module.exports = {
  getCep,
}