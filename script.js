var produto = 'Livro';
var preco = 200;
var carro = {
    marca: 'Audi',
    portas: 5,
};
var barato = 200 < 400 ? true : 'produto caro';
function somar(a, b) {
    return a + b;
}
somar(4, 10);
// somar(4, "4");
var nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
var produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
var textor = normalizarTexto('Olá vamos LÁAAAA');
console.log(textor);
