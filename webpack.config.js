/* eslint-disable */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var env = process.env.WEBPACK_ENV;

// 路径定义
var public_path = path.resolve(__dirname, 'public');
var demo_path = path.resolve(__dirname, 'demo');
var dist_path = path.resolve(__dirname, 'dist');
var lib_path = path.resolve(__dirname, 'lib');
var src_path = path.resolve(__dirname, 'src');

// 打包组件入口文件地址获取
var getDirectories = function (srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}
var getEntries = function () {
    var floders = getDirectories(src_path);
    entries = {};
    floders.forEach(function (i) {
        if (['_module', '_theme', 'less'].indexOf(i) > -1) { return; }
        entries['./dist/' + i + '/'] = [path.resolve(__dirname,'./src/' + i + '/' + 'index.js')];
    });
    return entries;
}

// 插件 -- 代码压缩
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var pluginUglifyJs = new UglifyJsPlugin({ minimize: true });

// 插件 -- html模版
var pluginHtmlwebpack = new HtmlwebpackPlugin({
    template: path.resolve(__dirname, 'public/template/index.html'),
    inject: 'body'
});

// 插件 -- css提取
var pluginCssExtract = new ExtractTextPlugin('bundle.css');

var config = {
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /public/, /test/],
                loader: 'eslint',
                query: { cacheDirectory: true}
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(bower_components|node_modules)/,
                query: { cacheDirectory: true}
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

/* [分支1] demo 代码: dev && build 配置 */
if (env === 'DEMO_DEV' ||  env === 'DEMO_BUILD') {
    // 入口文件
    config.entry = [path.resolve(public_path, 'main.js')];
    // 出口文件
    config.output = {path: demo_path, filename: 'bundle.js'};
    // loaders
    config.module.loaders.push({test: /\.(css|less)$/, loader: ExtractTextPlugin.extract('style', '!css!less')} );
    // plugins
    if (env === 'DEMO_DEV' ) config.plugins = [pluginCssExtract, pluginUglifyJs, pluginHtmlwebpack];
    if (env === 'DEMO_BUILD') config.plugins = [pluginCssExtract, pluginHtmlwebpack];
/* [分支2] 组件源码：打包到 dist目录下 */
} else if (env === 'BUILD') {
    // 入口文件
    config.entry = getEntries();
    // 出口文件
    config.output = {library: 'bundle', libraryTarget: 'umd', filename: '[name]bundle.js'};
    // externals
    config.externals = {'react': 'React', 'react-dom': 'ReactDOM', './React': 'React', './React-dom': 'ReactDOM'};
    // loaders
    config.module.loaders.push({test: /\.(css|less)$/, loader:'style-loader!css-loader!less-loader'} );
/* [分支3] karma webpack 配置 */
} else {
    config.module.loaders.push({test: /\.(css|less)$/, loader:'style-loader!css-loader!less-loader'} );
}

module.exports = config;
/* eslint-enable */
