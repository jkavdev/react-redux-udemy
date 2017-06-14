const restful = require('node-restful')
//api rest para trabalhar com o mongoose
const mongoose = restful.mongoose

//Criando o schema a ser usado no mongodb
const todoSchema = new mongoose.Schema({
    description: {type: String, require: true},
    description: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

//Exportando o schema
module.exports = restful.model('Todo', todoSchema)