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

// 2) Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
	// прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. 
	// Добавьте этот гаджет персоне, созданной ранее.

var smartPhone = {}

smartPhone.brand = prompt('Enter brand','IPhone, Samsung, Xiaomi');
smartPhone.displaySize = prompt('Enter display size','4" - 7"');
smartPhone.displayType = prompt('Enter display type','IPS or Amoled');
smartPhone.os = prompt('Enter OS','Android or IOS');
smartPhone.memory = prompt('Enter ','32-128 Gb');

person.smartPhone = smartPhone;
console.log(smartPhone);

// 3) Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. 
	// В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны 
	// (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. 
	// Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt 
	// редактирование person заканчивается. И обновленные данные распечатываются в консоли.

while (true) {
	var action = prompt('Enter action "update" or "delete"', 'update');
	
	if (action === null) break;

	if (action === 'update') {
		property = prompt('Enter property','');
		if (property !== null) {
			person[property] = prompt('Enter value of property', '');
		} else {
			console.log(person); break;
		} 
	} else if (action === 'delete') {
		property = prompt('Enter property','job');
		if (property in person) {
			delete person[property];
		} else {
			console.log(person); break;
		}
	}  
}
console.log(person);