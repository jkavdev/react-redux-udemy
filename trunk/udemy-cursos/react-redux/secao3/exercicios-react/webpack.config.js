const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: ['/node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            },
        }]
    }
}