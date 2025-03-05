"use strict";
const frase = 'Front End';
const preco = 500;
const condi = true;
console.log(typeof frase);
if (typeof frase === 'string') {
    console.log('Frase é uma string');
}
// Union Types
let total = 500;
total = 'Quinhentos';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber('200'));
const btn = document.querySelector('button');
btn?.click();
// exercicio
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'value deve ser um number | string';
    }
};
console.log(toNumber(200));
