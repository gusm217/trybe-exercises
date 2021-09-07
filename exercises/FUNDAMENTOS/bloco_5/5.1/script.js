let emergencyTasks = document.querySelector('.emergency-tasks');
let notEmergentTasks = document.querySelector('.no-emergency-tasks');
let notEmergent = document.querySelector('.no-emergency-tasks');
let emergencyTitles = document.querySelectorAll('.emergency-titles');
let notEmergentTitles = document.querySelectorAll('.not-emergent-titles');
let footer = document.getElementById('footer-container');

document.getElementById('header-container').style.backgroundColor = 'green';

emergencyTasks.style.backgroundColor = '#FF9F84';
for (let index = 0; index < emergencyTitles.length; index += 1 ) {
    emergencyTitles[index].style.backgroundColor = '#A500F3';
}

notEmergent.style.backgroundColor = '#F9DB5E';
for (let index = 0; index < notEmergentTitles.length; index += 1) {
    notEmergentTitles[index].style.backgroundColor = 'black';  
}

footer.style.backgroundColor = '#003533';
