const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//criacao da api rest, com os metodos aceitos
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//ao se atualizar um registro
//sempre ira retornar um novo registro ao se atualizar, e nao o registro antigo
//habilitando as validacoes na atualizacao
BillingCycle.updateOptions({ new: true, runValidators: true })
//Aplicando middleware de tratador de erro, apos a cada metodo de put e post
BillingCycle.after('post', errorHandler).after('put', errorHandler)

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

//Serviço que retorna o sumário de todos os ciclos de pagamento
BillingCycle.route('summary', (req, resp, next) => {
  //agrega varias opcoes
  BillingCycle.aggregate({
    //com o project, indicamos que queremos projetar uma soma dos valores de creditos e debitos
    //e retornar uma variavel com cada valor obtido de credito e debito
    $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
  }, {
      //com o group estaremos agrupando todos os registros obtidos pelo project, e somando seus valores
      //ele tem que ter especificado _id, mas podemos indicar como null
      $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
      //indicando que sera retornado o credito, e debito, _id nao
      $project: { _id: 0, credit: 1, debt: 1 }
      //feito isso
    }, (error, result) => {
      //se houver erro adiciona na lista
      if (error) {
        resp.statue(500).json({ errors: [error] })
      } else {
        //senao, envia o resultado, como o resultado e um array indicamos a primeira posicao
        //se nao houver o sumario, nos retorna um objeto com credito e debito zerado
        resp.json(result[0] || { credit: 0, debt: 0 })
      }
    })
})

module.exports = BillingCycle