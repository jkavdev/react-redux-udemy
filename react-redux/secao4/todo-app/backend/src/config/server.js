//Porta do servidor
const port = 3003

//midleware para o parse da requisicao
const bodyParser = require('body-parser')
//servidor de aplicacao
const express = require('express')
//criando instancia do servidor
const server = express()

//aplicando os midlewares para cada requisicao realizado
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//atribuindo a porta ao servido e apresentando mensagem de sucesso
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`)
})