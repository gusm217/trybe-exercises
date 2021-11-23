const { ObjectId } = require('bson')
const connection = require('./connection')

const create = async (plants) => {
  return connection()
    .then((db) => db.collection("plants").insertMany(plants))
    .then((res) => res)
    .catch((err) => err)
}

const getAllPlants = async () => {
  return connection()
    .then((db) => db.collection("plants").find().toArray())
    .then((res) => res)
    .catch((err) => err)
}

const getPlantById = async (id) => {
  return connection()
    .then((db) => db.collection("plants").findById({ id: ObjectId(id)}))
    .then((res) => res)
    .catch((err) => err)
}

module.exports = {
  create,
  getAllPlants,
  getPlantById
}