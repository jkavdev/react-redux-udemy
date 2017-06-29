const BillingCycle = require('./billingCycle')

//criacao da api rest, com os metodos aceitos
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//ao se atualizar um registro
//sempre ira retornar um novo registro ao se atualizar, e nao o registro antigo
//habilitando as validacoes na atualizacao
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle