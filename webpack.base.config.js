/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var env = process.env.WEBPACK_ENV;

var public_path = path.resolve(__dirname, 'public');
var demo_path = path.resolve(__dirname, 'demo');
var dist_path = path.resolve(__dirname, 'dist');
var lib_path = path.resolve(__dirname, 'lib');
var src_path = path.resolve(__dirname, 'src');

// 插件 -- 代码压缩
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var pluginUglifyJs = new UglifyJsPlugin({ minimize: true });

// 插件 -- html模版
var pluginHtmlwebpack = new HtmlwebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    inject: 'body'
});

var config = {
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.md$/,
                loader: 'html!markdown'
            },
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
    postcss: [autoprefixer, precss],
    resolve: {
        alias: {
            'source_path': src_path,
        },
        extensions: ['', '.js', '.jsx']
    }
}


// demo 代码: build
if (env === 'build') {
    config.entry = [path.resolve(public_path, 'main.js')];
    config.output = {
        path: demo_path,
        filename: 'build.js'
    };
    config.plugins = [pluginUglifyJs, pluginHtmlwebpack];
// demo 代码: dev
} else if (env === 'dev') {
    config.entry = [path.resolve(public_path, 'main.js')];
    config.output = {
        path: demo_path,
        filename: 'build.js'
    };
    config.plugins = [pluginHtmlwebpack];
}


module.exports = config;
/* eslint-enable */
