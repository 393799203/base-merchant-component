var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        bundle: './public/main.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve('./demo'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            'source_path': path.resolve(__dirname + '/src'),
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'public'),path.resolve(__dirname, 'src')],
                loader: 'babel'
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style', '!css!less')
            },
            { test: /\.md$/, loader: 'html!markdown' },
            {
                test: /\.svg(\?.+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            },
            {
                test: /\.woff(\?.+)?$/,
                loader: 'file-loader?mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.+)?$/,
                loader: 'file-loader?mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?.+)?$/,
                loader: 'file-loader?mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.+)?$/,
                loader: 'file-loader'
            }
        ]
    },

    postcss: function() {
        return [require('autoprefixer'), require('precss')]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false }})
    ]
}
