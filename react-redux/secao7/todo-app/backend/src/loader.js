//arquivos de configuracao
const server = require('./config/server')
require('./config/database')
//passando o servidor para o arquivo de configuracao das rotas
require('./config/routes')(server)