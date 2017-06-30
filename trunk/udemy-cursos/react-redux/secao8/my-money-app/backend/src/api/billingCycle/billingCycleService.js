const BillingCycle = require('./billingCycle')

//criacao da api rest, com os metodos aceitos
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//ao se atualizar um registro
//sempre ira retornar um novo registro ao se atualizar, e nao o registro antigo
//habilitando as validacoes na atualizacao
BillingCycle.updateOptions({ new: true, runValidators: true })

//Criando rota para o servico de count
//tera o nome count, e recebe um middleware
BillingCycle.route('count', (req, resp, next) => {
  //o mongo ja nos fornece este servico de contagem
  // em que recebe um callback contendo um erro e o valor retornado
  BillingCycle.count((error, value) => {
    //se aconteceu algum erro
    if (error) {
      //sera armazenado em um array
      resp.statue(500).json({ errors: [error] })
    } else {
      //senao retorna o valor, ambos erro ou value serao retornados em um objeto
      resp.json({ value })
    }
  })
})

module.exports = BillingCycle