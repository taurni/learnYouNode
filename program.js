/**
 * Created by taurni on 10.08.2015.
 */
var args = process.argv;
var sum = 0;
for(i=2;i <= args.length;i++){
    if(+args[i]){
        sum += parseInt(args[i],10);
    }
}

console.log(sum);