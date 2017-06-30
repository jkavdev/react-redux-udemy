//Porta do servidor
const port = 3003

//midleware para o parse da requisicao
const bodyParser = require('body-parser')

//servidor de aplicacao
const express = require('express')

//criando instancia do servidor
const server = express()

//definição de acessos a nossa api
const allowCors = require('./cors')

//Habilitara a conversão dos parametros de string para inteiro
//recurso necessario para realizar a busca paginada oferecida pelo mongo, mas o mongo aceita os estes valores 
//como inteiros e uma url eh uma string
const queryParser = require('express-query-int')

//aplicando os midlewares para cada requisicao realizado
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

//atribuindo a porta ao servido e apresentando mensagem de sucesso
server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`)
})

//exportando o servidor pois podemos usa-lo para registro das rotas
module.exports = server