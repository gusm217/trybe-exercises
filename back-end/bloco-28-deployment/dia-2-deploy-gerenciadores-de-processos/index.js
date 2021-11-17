const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (req, res) => {
  res.send(`Utilizando o ambiente de => ${NODE_ENV}`);
});

app.listen(PORT, () => console.log(`Funcionando aqui => ${PORT}`));
