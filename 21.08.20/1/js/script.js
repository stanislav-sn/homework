"use strict";

let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
let answer; 

if (a < b) {
    answer = a;
} else answer = b;
if (c < answer) {
    answer = c;
} else answer;

alert('Минимальное число = ' + answer)