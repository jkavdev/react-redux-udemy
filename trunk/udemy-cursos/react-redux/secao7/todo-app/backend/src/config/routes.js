const express = require('express')

//funcao exportada
module.exports = function (server) {

    //API de ROUTES
    //criacao da rota
    const router = express.Router()
    server.use('/api', router)

    //lendo o todoService, e registrando todos os seus metodos a partir de /todos
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}