//realizando referencia ao dos modulos webpack
const webpack = require('webpack')

//Cofiguracao do webpack, tornando visivel o que configuramos    
module.exports = {
    //Contera as definicoes para o webpack
    entry: './ex/index.js',
    //Configuracao de saida do webpack, arquivo que sera gerado 
    output: {
        path: __dirname + '/public', 
        filename: './bundle.js'
    },
    //Configuracao do servidor
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}