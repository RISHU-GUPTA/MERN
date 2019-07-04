const fs=require('fs');
var path='one.js';
fs.readFile(path,(err,content)=>{
if(err){
    console.log('unable to read file',err);
}
else{
    console.log('The file is '+content);
}
});