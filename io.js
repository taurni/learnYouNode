var fs = require('fs');
var file = process.argv[2];
var buf,char, count = 0;

buf = new Buffer(fs.readFileSync(file));
for(var i = 0; i < buf.length;i++){
    char = buf.toString(undefined,i,i+1);
    if(char ==='\n'){
        count++;
    }
}

console.log(count);