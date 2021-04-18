let saveSession = document.getElementById('all-choices');
let allInputs = document.querySelectorAll('.input')
let button = document.getElementById('salvar');

window.onload = button.addEventListener('click', salvarSessao);

function salvarSessao() {
    localStorage.setItem('choices', allInputs.innerHTML);    
}

saveSession.innerHTML = localStorage.getItem('choices');

