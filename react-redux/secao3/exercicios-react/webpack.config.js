const webpack = require('webpack')

//resolve - indicamos para o webpack pra resolver caso nao informamos a extensao do arquivo
module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: ['/node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
            },
        }]
    }
}