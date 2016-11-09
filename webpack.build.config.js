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
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['add-module-exports','transform-object-assign','transform-decorators-legacy', 'transform-es3-member-expression-literals', 'transform-es3-property-literals']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style', '!css!less')
            },
            { test: /\.md$/, loader: "html!markdown" }
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
