/**
 * Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query s
 tring with a key 'iso' and an ISO-format time as the value.

 For example:

 /api/parsetime?iso=2013-08-10T12:10:15.474Z

 The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

 {
   "hour": 14,
   "minute": 23,
   "second": 15
 }

 Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of
 milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

 { "unixtime": 1376136615474 }

 Your server should listen on the port provided by the first argument to your program.

 */

var http = require('http');
var url = require('url');
var date = new Date();

var server = http.createServer(function(req,res){

    if(req.method != 'GET'){
        return res.end('GET request only!');
    }
    router(req.url,res);

}).on('error',function(err){
    return console.error(err);
}).listen( Number( process.argv[2] ) );


function router(reqUrl, response){
    var _url = url.parse(reqUrl,true);
    var path = _url.pathname;
    var query = _url.query;

    response.writeHead(200, { 'Content-Type': 'application/json' })
    if(path == '/api/parsetime'){
        response.end(parsetime(query.iso));
    }else if(path == '/api/unixtime'){
        response.end(unixtime(query.iso));
    }else{
        response.end("invalid request!");
    }
}

function parsetime(isoTime){
    var date = new Date(isoTime);
    return JSON.stringify({
        "hour": date.getHours(),
        "minute":date.getMinutes(),
        "second":date.getSeconds()
    })
}

function unixtime(isoTime){
    var date = new Date(isoTime);
    return JSON.stringify({
        "unixtime":date.getTime()
    })
}