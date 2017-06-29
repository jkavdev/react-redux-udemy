//Api de operacoes com o banco
const mongoose = require('mongoose')

//para resolver o problema de depreciacao da Promise do mongoose
mongoose.Promise = global.Promise

//exportando e conectando com o banco da dados, sempre que iniciar a aplicacao o
//banco tambem tem que estar em executacao
module.exports = mongoose.connect('mongodb://localhost/mymoney')

//Aplicando mensagens padrao para todos os tipos de campo definidos aqui
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."