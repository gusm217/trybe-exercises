const connection = require('../connections/mysqlConnection');

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      `INSERT INTO rest_exercicios.products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM rest_exercicios.products');
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM rest_exercicios.products WHERE id = ?', [id]);
    if (!result.length) return null
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query('UPDATE rest_exercicios.products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM rest_exercicios.products WHERE id = ?', [id])
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };