//realizando referencia ao dos modulos webpack
const webpack = require('webpack')

//Cofiguração do webpack, tornando visivel o que configuramos    
module.exports = {
    //Conterá as definições para o webpack
    entry: './ex/index.js',
    //Configuração de saida do webpack, arquivo que será gerado 
    output: {
        path: __dirname + '/public', 
        filename: './bundle.js'
    },
    //Configuração do servidor
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}