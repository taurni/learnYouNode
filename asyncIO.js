var fs = require('fs');
var file = process.argv[2];
var buf,char, count = 0;

fs.readFile(file,'utf8', function(err,data){
    console.log(data.split('\n').length-1);
})