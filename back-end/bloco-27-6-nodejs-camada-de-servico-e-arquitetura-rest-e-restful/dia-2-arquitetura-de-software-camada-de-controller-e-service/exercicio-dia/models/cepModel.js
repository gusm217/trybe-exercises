const connection = require('../connections/connectionMysql')

const getCep = async (cep) => {
  try{
    const query = await connection.execute(
      'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
    )
    if(!query) return null;
    return query;
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getCep,
}