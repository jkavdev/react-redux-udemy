//realizando referencia ao dos modulos webpack
const webpack = require('webpack')
//Plugin para o gerenciamento do css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    },
    //arquivo a ser gerado
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    //Configuracao para o parse para codigo legivel pelo browser com babel
    //Adicionando plugin para compilacao do spread operator
    //Adicionado plugin para o carregamento do css
    module: {
        loaders: [{
            test: /.js?$/,
            exclude: ['/node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
            },
        },
        {
            test: /.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }
}