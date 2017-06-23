module.exports = function (req, res, next) {
    //quem tem acesso a nossa aplicacao
    res.header('Access-Control-Allow-Origin', '*')
    //metodos aceitos
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    //passando para a aplicacao a execucao
    next()
}