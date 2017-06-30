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

BillingCycle.route('summary', (req, resp, next) => {
  BillingCycle.aggregate({
    $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
  }, {
      $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
      $project: { _id: 0, credit: 1, debt: 1 }
    }, (error, result) => {
      if (error) {
        resp.statue(500).json({ errors: [error] })
      } else {
        resp.json(result[0] || { credit: 0, debt: 0 })
      }
    })
})

module.exports = BillingCycle