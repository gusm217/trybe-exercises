const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  titulo: bookData.title,
  id_autor: bookData.author_id
})

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  )

  return books.map(serialize);
}

const getByAuthorId = async (param) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE books.author_id = ?', [param]
  )
  
  if (books.length === 0) return null;
  
  return books.map(serialize);
}

// const getAll = async () => {
//   const [authors] = await connection.execute(
//       'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//   );
//   return authors.map(serialize).map(getNewAuthor);
// };

module.exports = {getAllBooks,  getByAuthorId };