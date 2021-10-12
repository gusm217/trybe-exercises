const express = require('express')
const app = express();
app.use(express.json())
require('dotenv').config()
const cepRouter = require('./router/cepRoutes')

const PORT = process.env.PORT || 3000;

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: "pong!"})
})

app.use('/cep', cepRouter)

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})

