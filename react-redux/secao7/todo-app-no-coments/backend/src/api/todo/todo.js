const restful = require('node-restful')
//api rest para trabalhar com o mongoose
const mongoose = restful.mongoose

//Criando o schema a ser usado no mongodb
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

//Exportando o schema
module.exports = restful.model('Todo', todoSchema)


// GET /api/todos HTTP/1.1
// Host: localhost:3003
// Cache-Control: no-cache
// Postman-Token: a0bcd361-afe2-8536-e1df-937c738ab486

// GET /api/todos?sort=-createdAt HTTP/1.1
// Host: localhost:3003
// Cache-Control: no-cache
// Postman-Token: 42721393-f620-c842-9d9a-9ec90e533c8d

// GET /api/todos?sort=-createdAt&amp;description__regex=/curso/ HTTP/1.1
// Host: localhost:3003
// Cache-Control: no-cache
// Postman-Token: 60cb0d08-c81f-8b69-e078-726e8f0be91d

// POST /api/todos HTTP/1.1
// Host: localhost:3003
// Content-Type: application/x-www-form-urlencoded
// Cache-Control: no-cache
// Postman-Token: 751e7869-d53d-92af-202b-ea8cd798eadf
// description=Testando+de+novo

// PUT /api/todos/5941e51418fbdc143c2348a1 HTTP/1.1
// Host: localhost:3003
// Content-Type: application/x-www-form-urlencoded
// Cache-Control: no-cache
// Postman-Token: 29e35911-e042-2cc4-371b-ee2b56beeda1
// done=true&description=Alterado