"use strict";

var a;

while (a !== true) {
	a = confirm('Закрыть окно?', '');
    
    if (a !== false) {
		break; 
	}
}