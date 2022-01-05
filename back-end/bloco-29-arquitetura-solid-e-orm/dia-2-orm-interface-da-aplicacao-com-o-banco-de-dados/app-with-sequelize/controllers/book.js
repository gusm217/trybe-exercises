const { Book } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try{ 
  const books = await Book.findAll();
  return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Algo deu errado AQUIIIIIIII" });
  }
  }
);

router.get('/id', async (req, res) => {
  try{
    const book = await Book.findByPk(req.params.id);
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado" });
  }
});

router.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try{
    const book = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(book);
  }
  catch (err) {
    return res.status(500).json({ message: "Algo deu errado" });
  }
});

router.post('/id', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try{
    const book = await Book.update({ title, author, pageQuantity }, { where: { id: req.params.id } });
    return res.status(201).json(book);
  }  catch (err) {
    return res.status(500).json({ message: "Algo deu errado" });
  }
});

router.delete('/id', async (req, res) => {
  try{
    const book = await Book.findByPk(req.params.id);
    if(!book) return res.status(404).json({ message: "Livro não encontrado" });
    await book.destroy({ where: {id: req.params.id} });
    return res.status(204).json(book);
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado" });
  }
});

module.exports = router