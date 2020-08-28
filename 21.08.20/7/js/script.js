"use strict";

let greeting = '';
let lang = prompt('Введите язык', 'ru, en, de');

if (lang === 'ru') {
    alert( 'Привет' );
} else
if (lang === 'en') {
    alert( 'Hello' );
} else
if (lang === 'de') {
    alert( 'Hallo' );
} else;

switch (lang) {
    case 'ru': alert( 'Привет' ); break;
    case 'en': alert( 'Hello' ); break;
    case 'de': alert( 'Hallo' ); break;
    default: alert( 'Неизвестное значение' );
  }