var fs = require('fs')
var path = require('path')
var stat = fs.stat;
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
function getEntries(){
    var srcpath = './src';
    var floders = getDirectories(srcpath);
    entries = [];
    floders.forEach(function(i){
        exists('src/'+i, 'lib/'+i, copy);
    });
    return entries;
}
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/'+ path,
                readable, writable;  

            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    var strRegex = "(.less|.css|.sass)$"; //用于验证图片扩展名的正则表达式
                    var re=new RegExp(strRegex);
                    if (re.test(path.toLowerCase())){
                        // 创建读取流
                        readable = fs.createReadStream( _src );
                        // 创建写入流
                        writable = fs.createWriteStream( _dst );   
                        // 通过管道来传输流
                        readable.pipe( writable );
                    }
                    
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};
var exists = function(src, dst, callback){
    fs.exists(dst, function(exists){
        if(exists){
            callback(src, dst);
        }else{
            fs.mkdir(dst, function(){
                callback(src,dst);
            })
        }
    });
}
getEntries();
