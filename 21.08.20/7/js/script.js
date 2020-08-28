"use strict";

let greeting;
let lang = prompt('Введите язык', 'ru, en, de');

if (lang === 'ru') {
    greeting = alert( 'Привет' );
} else
if (lang === 'en') {
    greeting = alert( 'Hello' );
} else
if (lang === 'de') {
    greeting = alert( 'Hallo' );
} else;

switch (lang) {
    case 'ru': greeting = alert( 'Привет' ); break;
    case 'en': greeting = alert( 'Hello' ); break;
    case 'de': greeting = alert( 'Hallo' ); break;
    default: alert( 'Неизвестное значение' );
  }