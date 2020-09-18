"use strict";

// 1) Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

let calculator = {
    read() {
        this.x = +prompt('Enter x:', );
        this.y = +prompt('Enter y:', );
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

// 2) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом 
// start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно 
// с сообщением, записанным в свойстве объекта message

let coffeeMachine  = {
        message: 'Your coffee is ready!',
        start() {
            setTimeout(() => alert(this.message), 3000);
        }
};
    
coffeeMachine.start();

// 3) Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два 
// объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() 
// приветствуйте каждого из пользователей персонально.

function hello() {
        alert(`Hello, ${this.firstname} ${this.lastname}!`);
    }
    
let person1 = {
    firstname: 'John', 
    lastname: 'Doe'
};
    
let person2 = {
    firstname: 'Tom', 
    lastname: 'Shepard'
};
    
hello.call(person1);
hello.call(person2);

// 6) Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
    
function format(start, end) {
    console.log(start + this.name + end);
}
    
format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.name, ['', '']); // undefined