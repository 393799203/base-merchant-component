var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var portfinder = require('portfinder');

var webpackConfig = require('../webpack.dev.config');

portfinder.basePort = 5000;//防止端口冲突

portfinder.getPort(function(portFinderErr, port){
    var devEntryBundle = [
        //'webpack/hot/dev-server',
        //'webpack-dev-server/client?http://localhost:' + port,
        './public/main.js'
    ];
    webpackConfig.entry.bundle = devEntryBundle;

    var compiler = webpack(webpackConfig);
    //console.log(compiler);

    var server = new WebpackDevServer(compiler, {
       contentBase: './public',
       hot: true,
       stats: {
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    });

    server.use('/', function (req, res, next) {
        if (req.get('X-Requested-With') != 'XMLHttpRequest') {
            res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));//渲染的页面入口
        } else {
            next();
        }
    });

    server.listen(port, function(){
        console.log('react dev server start at localhost:%s', port);
    });
});




