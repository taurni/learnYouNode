/*
 rite an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

 Your server should listen on the port provided by the first argument to your program.
 =====================================================================================

 */

var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req,res){
 if(req.method != 'POST'){
  return res.end('send a POST\n');
 }

 req.pipe(map(function (chunk) {
  return chunk.toString().toUpperCase()
 })).pipe(res)

 //res.on('data',function(data){
 // console.log("Data: ", data);
 //})

}).on('error',function(err){
 console.eror(err);
});

server.listen( Number(process.argv[2]) );
