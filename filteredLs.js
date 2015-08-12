var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(path.normalize(dir),function(err,list){
    if(err){
        console.log('ERR',err);
    }
    for(var i = 0; i < list.length; i++){
        //console.log(list[i].search("."+ext));
        //if(list[i].search("."+ext) > 0){
        //    console.log(list[i]);
        //}
        if(path.extname(list[i]) == '.'+ext ){
            console.log(list[i])
        }
    }
});

