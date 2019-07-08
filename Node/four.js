var fs=require('fs');
fs.watchFile(__filename,(curr,prev)=>{
    console.log('file changes ',curr.mtime,prev.mtime);
    
    
})