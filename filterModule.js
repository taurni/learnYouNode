module.exports = function ( directory,extention,callback ) {
    var fs = require('fs');
    var path = require('path');
    var dir = directory;
    var ext = extention;
    var files = []

    fs.readdir(path.normalize(dir),function(err,list){
        if(err){
             return callback(err);
        }
        for(var i = 0; i < list.length; i++){

            if(path.extname(list[i]) == '.'+ext ){
               files.push(list[i])
            }
        }
        callback(null,files);
    });

}