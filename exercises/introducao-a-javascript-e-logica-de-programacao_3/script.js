// Exercício 1
// n = 5

// *****
// *****
// *****
// *****
// *****
let n = 5;

for (let index = 1; index <= n; index += 1) {
    console.log("*".repeat(n))        
}

// Exercício 2
// n = 5

// *
// **
// ***
// ****
// *****

for (let index = 1; index <= n; index += 1) {
    console.log('*'.repeat(index))
}


// Exercício 3
// n = 5

//     *
//    **
//   ***
//  ****
// *****
let blank;
for (let index = 1; index <= n; index += 1) {
    blank = n - index
    console.log(' '.repeat(blank) + '*'.repeat(index))
}

// Exercício 4
// n = 5

//   *
//  ***
// *****

for (let index = 1; index <= n; index += 1){
    let emBranco = Math.ceil(n-index/2);
    if (index % 2 != 0) {
        console.log(' '.repeat(emBranco) + '*'.repeat(index) + ' '.repeat(emBranco))
    } else {
        console.log('\n')
    }
}

// --------------- EXERCÍCIOS BÔNUS ---------------------
// 
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

if (n % 2 != 0) {
    
}