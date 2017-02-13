var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'test');
var BUILD_PATH = path.resolve(__dirname, 'demo/test');
var TEM_PATH = path.resolve(__dirname, 'test/templates');

var config = {
  debug:true,
  devtool: "#eval-source-map",
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  evtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  resolve: {                                      // resolve 指定可以被 import 的文件后缀
    extensions: ['', '.js', '.jsx'],
    alias: {
      'node_modules_path': path.resolve(__dirname, 'node_modules') ,
      'source_path': path.resolve(__dirname + '/src'),
      'module_path': path.resolve(__dirname + '/src'),
      'base_path': path.resolve(__dirname + '/src/base'),
      'lib_path': path.resolve(__dirname + '/lib')
    }
  },
  module: {
    loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&-minimize!' + 'postcss-loader'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
                )
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
  plugins: [
    new HtmlwebpackPlugin({ 
      title: '小店组件',
      template: path.resolve(TEM_PATH, 'layout.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css")
  ]
}

module.exports = config;