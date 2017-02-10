var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var devEntryBundle = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:5000',
    './public/main.js'
]

module.exports = {

    devtool: '#source-map',

    entry: {
        bundle: devEntryBundle
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve('./dist/'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            'source_path': path.resolve(__dirname + '/src'),
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /public/],
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'public'),path.resolve(__dirname, 'src')],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: [
                        'add-module-exports',
                        'transform-object-assign',
                        'transform-decorators-legacy',
                        'transform-es3-member-expression-literals',
                        'transform-es3-property-literals'
                    ]
                }
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
    ]
}