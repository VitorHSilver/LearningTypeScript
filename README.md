# Learning TypeScript

Este projeto é um exemplo básico de como usar TypeScript com diferentes tipos de dados e funções.

## Código de Exemplo

```typescript
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

// Exercicio

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
```

## Descrição

- **Tipos Básicos**: O código define variáveis com tipos básicos como `string`, `number` e `boolean`.
- **Union Types**: Demonstra o uso de tipos de união (`string | number`).
- **Funções**: Inclui funções para verificar tipos e converter valores.
- **Manipulação de DOM**: Seleciona e clica em um botão no DOM.

