"use strict";

// 1) Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. 
	// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, 
	// и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, 
	// которое также запрашивается из prompt.

let person = {
	"firstname": "Will",
	"lastname": "Smit",
	"age": "51",
	"job": "actor"	
};
	
let property = prompt('Enter property', ''); 
	
if (property in person) {
		alert(person[property])
	} else {
		person[property] = prompt('Enter value of property', '');   
	}
console.log(person);	