const express = require('express');
const app = express();
app.use(express.json());
const bookRoutes = require('./controllers/book');

app.use('/books', bookRoutes);

app.listen(3000, () => { console.log("Server is running on port 3000") });
