var http = require('http');
var bl = require('bl');
var url = process.argv[2];

var req = http.get(url,function(res){
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
       // console.log(chunk);
    });

    res.pipe(bl(function (err,data){
        console.log(data.toString().length);
        console.log(data.toString());
    }));

    res.on("error", function(error){
        console.log(error);
    });

});