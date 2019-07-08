var fs=require('fs');
const path='D:/MOVIES/Hollywood/Avengers/TheIncredibleHulk.mp4';
const path2='D:/MOVIES/Hollywood/Avengers/TheIncredibleHulkcopy.mp4';
var stream=fs.createReadStream(path);
var writestream=fs.createWriteStream(path2);
stream.on('data',(chunk)=>{
    writestream.write(chunk);
    console.log('chunk is ',chunk);
})



// fs.readFile(path,(err,content)=>{
//     if(err){
//         console.log('error is ',err);
//     }
//     else{
//         console.log(content);
//     }
// });