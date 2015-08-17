var http = require('http');
var bl = require('bl');

var urls = [process.argv[2],
            process.argv[3],
            process.argv[4]];
var responses = [];
var comleated = 0;

for(var i=0; i<3; i++) {

    readUrl(urls[i],i)
}

function readUrl(url,i,callback){
    http.get(url, function (res) {
        var data;
        res.setEncoding('utf8');

        res.pipe(bl(function (err, data) {
            //callback(data.toString(),i);
            responses[i] = data.toString();
        }));

        res.on("error", function (error) {
            console.log(error);
        });

        res.on('end', function (data) {
            comleated++
            if(comleated == 3){
                //console.log("ALL DUNE")
                printRes()
            }
        })

    })
}

function printRes(){
  //console.log(responses);
  console.log(responses[0]);
  console.log(responses[1]);
  console.log(responses[2]);
}

