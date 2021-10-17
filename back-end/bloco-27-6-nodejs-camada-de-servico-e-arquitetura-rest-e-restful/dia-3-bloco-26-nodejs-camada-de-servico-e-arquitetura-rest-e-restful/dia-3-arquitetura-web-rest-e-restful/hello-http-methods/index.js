// index.js
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';
const axios = require('axios').default;

const headers = { Authorization: API_TOKEN };

const body = {
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r',
};

// axios.get('https://postman-echo.com/get?param1=teste', { headers })
// Para aquecer, vamos começar com uma requisição do tipo `GET`
axios.post('https://postman-echo.com/post?param1=teste', body, {headers})
// axios.get('https://postman-echo.com/get?param1=teste')
  .then((response) => {

    // Caso esteja tudo OK, retornamos os dados
    // As informações são retornas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });