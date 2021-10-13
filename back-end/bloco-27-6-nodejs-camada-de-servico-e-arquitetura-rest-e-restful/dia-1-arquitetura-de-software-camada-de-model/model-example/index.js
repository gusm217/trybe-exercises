// index.js

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Book')

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
    const books = await Books.getAllBooks();

    res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;

    const books = await Books.getByAuthorId(id);

    if(!books) return res.status(404).json({message: 'not found'})

    res.status(200).json(books);
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});