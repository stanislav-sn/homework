"use strict";

// 1) Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, 
// то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном 
// модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть 
// запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. 
// А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.

function d () {
        debugger;
    }
    
    function a (value) {
        alert(value);
    }
    
    function p (message, value) {
        if (message === undefined) {
            message =  'Enter something';
        }
    
        if (value === undefined) {
            value = 'something';
        }
        return prompt(message, value);
    }
    
    d();
    let name = p( 'Enter your name', '');
    a(name);
    
    a( 'Hello World' );

// 2) Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), 
// которая сравнивает два числа и возвращает большее:

let max = (a,b) => (a > b) ? a : b;
console.log( max(0, -1) );

// 3) Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество 
// чисел и возвращает меньшее из них:

function min (number) {
    let minNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < arguments[0]) {
            minNumber = arguments[i];
        }
        
    }
    return minNumber;
}

console.log( min(0, -1, 100, 500, 100500) );

