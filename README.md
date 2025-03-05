# Learning TypeScript

Este projeto é uma introdução ao TypeScript, demonstrando como utilizar interfaces, tipos e funções assíncronas para manipular dados e interagir com APIs.

## Estrutura do Projeto

### Interfaces e Tipos

Definimos uma interface `DadosIsObject` para representar objetos com propriedades específicas e um tipo `Categorias` para categorizar itens.

```typescript
interface DadosIsObject {
    nome: string;
    preco: number;
    teclado: boolean;
}

type Categorias = 'design' | 'codigo' | 'descod';
```

### Funções

#### preencherDados

Esta função recebe um objeto do tipo `DadosIsObject` e insere suas informações no corpo do documento HTML.

```typescript
function preencherDados(dados: DadosIsObject) {
    document.body.innerHTML += `
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p> Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
    </div>`;
}
```

#### pintarCategoria

Esta função recebe uma categoria do tipo `Categorias` e a imprime no console.

```typescript
function pintarCategoria(categorias: Categorias) {
    console.log(categorias);
}
```

### Exemplo de Uso

Criamos objetos e chamamos as funções para demonstrar seu funcionamento.

```typescript
const computador: DadosIsObject = {
    nome: 'Computador',
    preco: 4000,
    teclado: true,
};
preencherDados(computador);

preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false,
});

pintarCategoria('codigo');
```

### Funções Assíncronas

#### handleFetch

Esta função assíncrona busca dados de uma API e exibe as informações do produto no corpo do documento HTML.

```typescript
const handleFetch = async () => {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
    console.log(data);
};
handleFetch();
```

#### showProduct

Esta função recebe os dados do produto da API e insere suas informações no corpo do documento HTML.

```typescript
interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}

interface ProdutoApi {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

const showProduct = (data: ProdutoApi) => {
    document.body.innerHTML += `<fieldset>
    <legend>${data.nome}</legend>
    <sup>R$</sup> <span>${data.preco}</span>
    <p>${data.descricao}</p>
    <p>Garantia: ${Number(data.garantia)}</p>
    <p>Montadora: ${(data.empresaMontadora.nome)}</p>
    <p>Fabricante: ${(data.empresaFabricante.nome)}</p>
    </fieldset>`;
};
```

## Conclusão

Este projeto demonstra como utilizar TypeScript para definir tipos e interfaces, manipular o DOM e interagir com APIs de forma assíncrona.