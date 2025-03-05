# Learning TypeScript

TypeScript é um superset do JavaScript que adiciona tipagem estática opcional à linguagem. Ele permite que os desenvolvedores escrevam código mais seguro e previsível, ajudando a evitar erros comuns durante o desenvolvimento.


### Funções

```typescript
function somar(a: number, b: number) {
    return a + b;
}

somar(4, 10);
// somar(4, "4"); // Isso causaria um erro de compilação
```


TypeScript ajuda a garantir que o código seja mais robusto e menos propenso a erros, tornando o desenvolvimento de aplicações grandes e complexas mais gerenciável.

### Exemplo de Código

O exemplo a seguir mostra como usar o TypeScript para manipular o DOM e armazenar dados no `localStorage`:

```typescript
const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}

function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}

if (input) {
    input.addEventListener('keyup', totalMudou);
}
```


