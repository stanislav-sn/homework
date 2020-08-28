"use strict";

var x = +prompt('x', 0);
var error;

switch (x) {
    case 0: error = alert('На ноль делить нельзя'); break;
    case 1: error = alert('На единицу делить бессмысленно'); break;
    case NaN: error = alert('Не математическая операция'); break;
}

if (error) {
    alert('error');
} else {
    alert(100 / x);
}
