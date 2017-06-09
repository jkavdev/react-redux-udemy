//Executando o webpack manualmente./node_modules/.bin/webpack

//Arquivos que nao sao referenciados pelo index.js, nao sao empacotados pelo webpack
//Se somente fizermos referencia ao arquivo mais nao usa-lo, o arquivo sera carregado
//pelo webpack do mesmo jeito, mas se nao houver referencia o webpack nao gerencia
require('./duvidaCruel')