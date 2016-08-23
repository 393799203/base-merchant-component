var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var HtmlWebpackPlugin = require('html-webpack-plugin')
var fs = require('fs')

module.exports = {
    // entry: {
        // "app/test.js": "test"
    // }
    entry: getEntries(),

    output: {
        library: 'bundle',
        libraryTarget: "umd",
        filename: '[name]bundle.js'
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
                    plugins: ['add-module-exports', 'transform-object-assign']
                }
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
                loader: "style!css"
                // loader: ExtractTextPlugin.extract(
                //     'css?sourceMap&-minimize!' + 'postcss-loader'
                // )
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
                loader: 'style-loader!css-loader!less-loader'
                // loader: ExtractTextPlugin.extract(
                //     'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
                // )
            }
        ]
    },

}
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
function getEntries(){
    var srcpath = './src';
    var floders = getDirectories(srcpath);
    entries = {};
    floders.forEach(function(i){
        entries['./dist/'+i+'/'] = path.resolve(__dirname,'./src/'+i+'/'+'index.js');
    });
    console.log(entries)
    return entries;
}
