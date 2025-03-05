const frase: string = 'Front End';
const preco: number = 500;
const condi: boolean = true;

console.log(typeof frase);
if (typeof frase === 'string') {
     console.log('Frase é uma string');
}

// Union Types

let total: string | number = 500;
total = 'Quinhentos';

function isNumber(value: string | number) {
     if (typeof value === 'number') {
          return true;
     } else {
          return false;
     }
}
console.log(isNumber('200'));

const btn = document.querySelector('button');
btn?.click();

// exercicio

const toNumber = (value: number | string) => {
     if (typeof value === 'number') {
          return value;
     } else if (typeof value === 'string') {
          return Number(value);
     } else {
          throw 'value deve ser um number | string';
     }
};

console.log(toNumber(200));
