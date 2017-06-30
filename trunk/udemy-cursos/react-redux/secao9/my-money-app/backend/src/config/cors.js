module.exports = function (req, resp, next) {
  //quem tem acesso a nossa aplicacao
  resp.header('Access-Control-Allow-Origin', '*')
  //metodos aceitos
  resp.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  //passando para a aplicacao a execucao
  next()
}