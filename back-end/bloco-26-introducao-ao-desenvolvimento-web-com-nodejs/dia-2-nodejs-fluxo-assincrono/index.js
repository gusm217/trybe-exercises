// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function numsPromise (num1, num2, num3) {
  const resultado = ((num1 + num2) * num3)
  const promise = new Promise((resolve, reject) => {
    if (num1 === String || num2 === String || num3 === String) {
      reject(new Error("Informe apenas números"))
    } else if (resultado < 50) {
      reject(new Error("Valor muito baixo"))
    }
    resolve(resultado); 
  })
  return promise;
}

numsPromise(1, 2, 25)
  .then(res => console.log(res))
  .catch(er => console.log(er))
