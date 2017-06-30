const _ = require('lodash')

//sera um middleware
module.exports = (req, resp, next) => {
  //bundle - objeto que contem os erros na requisicao
  const bundle = resp.locals.bundle

  //se houver erros
  if (bundle.errors) {
    //obtenhos os erros
    const errors = parseErrors(bundle.errors)
    //passo os erros formatados
    resp.status(500).json({ errors })
  } else {
    //se nao passa para o proximo middleware
    next()
  }
}

//parse dos erros requisicao gerados pelo nodeRestful
const parseErrors = (nodeRestfulErrors) => {
  //contera os erros gerados
  const errors = []
  //usando o lodash
  //para cada erro gerado pelo nodeRestful
  //executara uma funcao de callback que obtera a mensagem do erro
  //e incluira no array que sera disponibilizado
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))

  return errors
}