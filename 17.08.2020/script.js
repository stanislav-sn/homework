console.log('logging info');
console.info('info');
console.warn('warning');
console.error('error');

'use strict';
// 1) Найти ошибку
var x = prompt('Введите Х', '1')
    y = prompt('Введите Y', '1')
    z = Number(x) + Number(y);

alert( 'Сумма: ' + z);

// 2) Вывод чисел
var a = 12
    b = a ** 3
    c = a + b;
alert(a);
alert(b);
alert(c);

// 3) 
let firstName = prompt('Введите Имя', 'John');
let lastName = prompt('Введите Фамилию', 'Doe');
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
alert('What\'s up ' + (ucFirst(firstName) + ' ' + ucFirst(lastName)));

// 4)

let d = prompt('Введите число')
    e = prompt('Введите число')
    summa = d + e
    proizv = d * e;
if (d>e) {raznost=d-e; chast=d/e} 
else {raznost=e-d; chast=e/d}
alert('Сумма ' + summa);
alert('Произведение ' + proizv);
alert('Разность ' + raznost);
alert('Частное ' + Math.round(chast));
