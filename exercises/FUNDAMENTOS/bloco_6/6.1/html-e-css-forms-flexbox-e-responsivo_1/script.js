let state = document.createElement('option');
document.getElementById('estados').addEventListener('click', function() {

})


// let array = [
// AC
// AL
// AP
// AM
// BA
// CE
// DF
// ES
// GO
// MA
// MS
// MT
// MG
// PA
// PB
// PR
// PE
// PI
// RJ
// RN
// RS
// RO
// RR
// SC
// SP
// SE
// TO
// ]

let dateFormat = document.getElementById('data')
dateFormat.addEventListener('keyup', function() {
    if (dateFormat.innerText !== this.nodeValue) {
        return alert('Data inválida!')
    }
})