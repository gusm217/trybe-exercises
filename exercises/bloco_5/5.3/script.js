function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let liDays = document.createElement('li');
        liDays.className = 'day';
        liDays.innerHTML = dezDaysList[index];
        if (liDays[index] === 24 && liDays[index] === 25 && liDays[index] === 31) {
            liDays[index].className = 'holiday';
        } else if (liDays[index] === 4 && liDays[index] === 11 && liDays[index] === 18 && liDays[index] === 25) {
            liDays[index].className = 'friday';
        }     

        weekDaysList.appendChild(liDays);
    }

  };
  
  createDaysOfTheWeek();
  
  