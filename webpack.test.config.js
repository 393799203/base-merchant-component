var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var HtmlWebpackPlugin = require('html-webpack-plugin')
var fs = require('fs')

module.exports = {
    entry: getEntries(),
    output : {
            filename: '[name]bundle.js',
            chunkFilename: "[name]bundle.js"
        },
    //plugins: [new HtmlWebpackPlugin()],
    module: {
        
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015','stage-2'],
                    plugins: ['add-module-exports']
                }
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'demo'), path.resolve(__dirname, 'src')],
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&-minimize!' + 'postcss-loader'
                )
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'demo'),path.resolve(__dirname, 'src')],
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
                )
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name]bundle.css")
    ]
};    

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
function getEntries(){
    var srcpath = './demo';
    var floders = getDirectories(srcpath);
    entries = {};
    floders.forEach(function(i){
        entries['./demo/'+i+'/'] = path.resolve(__dirname,'./demo/'+i+'/'+'index.js');
    });
    return entries;
}

 
