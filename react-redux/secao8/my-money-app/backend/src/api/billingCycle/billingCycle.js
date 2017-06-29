//conecta o mongoose com o servidor
const restful = require('node-restful')
//api rest para trabalhar com o mongoose
const mongoose = restful.mongoose

//schema do credito
const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, require: true }
})

//schema do debito
const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, require: true },
  status: {
    type: String, require: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  }
})

//schema do ciclo de pagamento
const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, require: true },
  year: { type: Number, min: 1970, max: 2100, require: true },
  credits: [creditSchema],
  debts: [debtSchema]
})


//Exportando o schema
module.exports = restful.model('BillingCycle', billingCycleSchema)