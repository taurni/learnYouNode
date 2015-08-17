var net = require('net');
var port = process.argv[2];

console.log(port);

var server = net.createServer(function (socket) {
    var date = new Date();
    socket.write(date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes());
    socket.end();
});

server.listen(port);q

/*

 var net = require('net')

 function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
 }

 function now () {
 var d = new Date()
 return d.getFullYear() + '-'
 + zeroFill(d.getMonth() + 1) + '-'
 + zeroFill(d.getDate()) + ' '
 + zeroFill(d.getHours()) + ':'
 + zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))


 */