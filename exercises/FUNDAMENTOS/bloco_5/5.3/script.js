function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
	};
}

createDaysOfTheWeek();
    
// PARTE 1:
function createNumDays() {
	const weekDaysList = document.querySelector('.week-days');
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

	for (let day in dezDaysList) {
		let numDays = document.createElement('li');
		numDays.innerHTML = dezDaysList[day];
		numDays.classList.add('day');
		
		// adicionado +1 ao day pois array começa no zero;
		if (day === '25' || day === '26' || day === '32') {
			numDays.classList.add('holiday');
		}
		if (day === '5' || day === '12' || day === '19' || day === '26') {
			numDays.classList.add('friday');
		}

	weekDaysList.appendChild(numDays);
	}
}

createNumDays();

// PARTE 2:
function btnFeriados() {
	let divButtons = document.querySelector('.buttons-container');
	let button = document.createElement('button');
	button.id = 'btn-holiday';
	button.innerText = 'Feriados'
	divButtons.appendChild(button);	
}

btnFeriados();

// PARTE 3:
let clickBtn = document.getElementById('btn-holiday')
clickBtn.addEventListener('click', highlightHoliday);

function highlightHoliday() {
	let holidays = document.querySelectorAll('.holiday');	
	if (holidays.style.backgroundColor !== 'yellow' ) {
		holidays.style.backgroundColor = 'yellow';
	}
	holidays.style.backgroundColor = "rgb(238,238,238)";
}
