// const fetch = require('node-fetch');
// const { resolve } = require('node:path');
// apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())   
//     .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
// };

// window.onload = () => fetchJoke();

// ------------  A PPARTIR DO 2 ----------------
const promise = () => {
  const isBiggerThanEigthk = new Promise((resolve, reject) => {
    let array = [];
    for (let index = 0; index < 10; index += 1) {
      let sqrNum = 0;
      sqrNum = ((Math.random() * (50 - 1) + 1) ** 2)
      array.push(sqrNum)
    }
    
    let sum = 0;  
    array.forEach((num) => sum += num)
    
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject(sum);
    }
  })

  isBiggerThanEigthk
    .then((sum) => console.log(`Promise resolvida\n /2: ${sum / 2}\n /3: ${sum / 3}\n /5: ${sum / 5}\n /10: ${sum / 10}`))
    .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))
};

promise();