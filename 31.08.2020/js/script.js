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

// 4) Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный 
// 	  ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства 
// 	  (работа с DOM - с использованием методов jQuery).



// 5) Создайте объект dates для хранения дат. Первая дата – позавчера. 
// 	  Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
// 	  Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

var date1 = new Date();
var date2 = new Date();

var dates = {
	'first date': date1.toDateString(date1.setDate(date1.getDate() - 2)),
	'second date': date2.toDateString(date2.setDate(date2.getDate() - 365))
};
console.log(dates);

var someDate = prompt('Enter date in format yyyy-MM-dd','2020-09-04');
if (new Date(someDate) >= Date.parse(dates['second date']) && new Date(someDate) <= Date.parse(dates['first date'])) {
	alert('Дата попала в диапазон дат');
} else {
	alert('Дата не попала в диапазон дат');
}


// 6) Создайте структуру данных, полностью описывающую html-разметку картинки. 
// 	  С помощью методов jQuery добавьте ее на страницу со всеми атрибутами, 
// 	  читая значения свойств из созданного объекта.
// 	  <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif"
//    alt="" style="border: 1px solid #ccc" width="200" />

