// 1 - Quadrado com asteriscos
// Declaro uma variável q vai ser o numero de lados
// como preciso imprimir várias vezes um mesmo caracter, utilizar de um for dentro de um for pra linha e coluna.

let lados = 5;

for (let i = 1; i <= lados; i += 1) {            
    for (let k = 1; k <= lados; k += 1) {
        console.log("*")
        break;
    }
    
}

