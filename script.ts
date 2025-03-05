// interface ideal para objetos
interface DadosIsObject {
     nome: string;
     preco: number;
     teclado: boolean;
}
// type ideal para esses tipos
type Categorias = 'design' | 'codigo' | 'descod';

function preencherDados(dados: DadosIsObject) {
     document.body.innerHTML += `
     <div>
     <h2>${dados.nome}</h2>
     <p>R$ ${dados.preco}</p>
     <p> Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
     </div>`;
}
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

function pintarCategoria(categorias: Categorias) {
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
