"use strict";

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
    return days[date.getDay()];
  }
  
  let day = new Date(2020, 7, 28);
  
  if (day[5]) {
      alert( getWeekDay(day) , 'Хватит валяться')
  }else alert( getWeekDay(day) );