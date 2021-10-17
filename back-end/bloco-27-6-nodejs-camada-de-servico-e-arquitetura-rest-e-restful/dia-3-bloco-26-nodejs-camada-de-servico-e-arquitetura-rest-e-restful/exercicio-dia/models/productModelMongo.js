const connection = require("../connections/MongoDBConnection");
const { ObjectId } = require("mongodb");
const { connect } = require("../controllers/productController");

const add = async (name, brand) => {
  return connection().then((db) =>
    db
      .collection("products")
      .insertOne({ name, brand })
      .then((result) => ({ id: result.insertId, name, brand }))
      .catch((err) => err)
  );
};

// const add = async (name, brand) => {
//   try {
//     const [
//       result,
//     ] = await connection.query(
//       `INSERT INTO rest_exercicios.products (name, brand) VALUES (?, ?);`,
//       [name, brand]
//     );

//     return { id: result.insertId, name, brand };
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

const getAll = async () => {
  return connection()
    .then((db) => db.collection("products").find().toArray())
    .then((products) =>
      products.map(({ _id, name, brand }) =>
        getNewProduct({
          id: _id,
          name,
          brand,
        })
      )
    );
};

// const getAll = async () => {
//   try {
//     const [rows] = await connection.query('SELECT * FROM rest_exercicios.products');
//     return rows;
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

const getById = async (id) => {
  return connection()
    .then((db) => db.collection("products").findOne({ _id: ObjectId(id) }))
    .then((result) => result)
    .catch((err) => err);
};

// const getById = async (id) => {
//   try {
//     const [result] = await connection.query('SELECT * FROM rest_exercicios.products WHERE id = ?', [id]);
//     if (!result.length) return null
//     return result[0];
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

const update = async (id, name, brand) => {
  return connection()
    .then((db) =>
      db
        .collection("products")
        .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } })
    )
    .then(() => ({ _id: ObjectId(id), name, brand }))
    .catch((err) => err);
};

// const update = async (id, name, brand) => {
//   try {
//     const [result] = await connection.query('UPDATE rest_exercicios.products SET (name, brand) VALUES ?, ? WHERE id = ?', [name, brand, id])
//     if (!result) return null;
//     return result;
//   } catch (err) {
//     console.log(err)
//   }
// }

const exclude = async (id) => {
  return connection()
    .then((db) => db.collection("products").deleteOne({ id: ObjectId(id) }))
    .then((result) => result)
    .catch((err) => err);
};

// const exclude = async (id) => {
//   try {
//     const product = await getById(id);
//     if (!product) return {};
//     await connection.query('DELETE FROM rest_exercicios.products WHERE id = ?', [id])
//     return product;
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

module.exports = { add, getAll, getById, update, exclude };
