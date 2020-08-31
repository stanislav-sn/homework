"use strict";

let str = '';

for (let i = 1; i <= 11; i++) {
    if (i % 2 === 0) {
        str += '#';
    } else {
        str += '.';
    }
}
alert(str);