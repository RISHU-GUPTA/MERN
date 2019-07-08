var fs=require('fs');
var path=require('path');
console.log(__filename);
console.log(__dirname);
var newpath=path.normalize(__dirname+"/..");
console.log(newpath);
var newpath=path.join(newpath,"/hiravi/path.js");
console.log(newpath);
fs.readFile(newpath,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('datab i '+data);
    }
})
console.log(path.basename(newpath));
console.log(path.dirname(newpath));
console.log(path.sep);
console.log(path.delimiter);
console.log(path.parse(newpath));
