"use strict";

let iAm = +prompt('Сколько денег у Вас в кормане?', '');
let friend = +prompt('Сколько денег в кармане Вашего друга?', '');
let allM = iAm + friend;

if (allM === 0) {
    alert('Вы никуда не сможете сходить');
} else
if (allM >= 20 && allM <= 40) {
    alert('Вы сможете купить пиво');
} else
if (allM >= 100 && allM <= 200) {
    alert('Вы сможете сходить в кино');
} else
if (allM >= 10000 && allM <= 12000) {
    alert('Вы сможете полететь на Мальту');
} else;