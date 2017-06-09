const produto = {
    nome: 'Caneta Azul',
    preco: 2,
    qtde: 3
}

//O spread operator clona um objeto, separando todos os atributos do objeto a ser clonado
//E criando um outro com os mesmos valores, mas objetos diferentes
function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Preta'

console.log(produto, novoProduto);