"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
     <div>
     <h2>${dados.nome}</h2>
     <p>R$ ${dados.preco}</p>
     <p> Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
     </div>`;
}
const computador = {
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
function pintarCategoria(categorias) {
    console.log(categorias);
}
pintarCategoria('codigo');
// exercicio
const handleFetch = async () => {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
    console.log(data);
};
handleFetch();
const showProduct = (data) => {
    document.body.innerHTML += `<fieldset>
     <legend>${data.nome}</legend>
     <sup>R$</sup> <span>${data.preco}</span>
     <p>${data.descricao}</p>
     <p>Garantia: ${Number(data.garantia)}</p>
     <p>Montadora: ${(data.empresaMontadora.nome)}</p>
     <p>Fabricante: ${(data.empresaFabricante.nome)}</p>
     </fieldset>`;
};
