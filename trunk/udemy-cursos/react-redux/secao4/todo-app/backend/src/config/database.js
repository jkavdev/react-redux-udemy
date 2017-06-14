//Api de operacoes com o banco
const mongoose = require('mongoose')

//para resolver o problema de depreciacao da Promise do mongoose
mongoose.Promise = global.Promise

//exportando e conectando com o banco da dados, sempre que iniciar a aplicacao o
//banco tambem tem que estar em executacao
module.exports = mongoose.connect('mongodb://localhost/todo')