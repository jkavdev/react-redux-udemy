//Referencia singleton do servidor
const express = require('express')

//funcao exportada
module.exports = function (server) {

  //API de ROUTES
  //criacao da rota
  const router = express.Router()
  server.use('/api', router)

  //lendo o billingCycleService, e registrando todos os seus metodos a partir de /billingCycle
  const billingCycle = require('../api/billingCycle/billingCycleService')
  billingCycle.register(router, '/billingCycles')
}