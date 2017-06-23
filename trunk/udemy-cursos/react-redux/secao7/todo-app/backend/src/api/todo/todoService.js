const Todo = require('./todo')

//criacao da api rest, com os metodos aceitos
Todo.methods(['get', 'post', 'put', 'delete'])
//ao se atualizar um registro
//sempre ira retornar um novo registro ao se atualizar, e nao o registro antigo
//habilitando as validacoes na atualizacao
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo