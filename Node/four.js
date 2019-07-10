var os=require('os');
console.log('platform',os.platform());
console.log('arch',os.arch());
console.log('cpus',os.cpus());
console.log('freemem',os.freemem());
console.log('network',os.networkInterfaces());
console.log('totalmem',os.totalmem());
console.log('uptime ',os.uptime());
console.log('userinfo',os.userInfo());




var fs=require('fs');
fs.watchFile(__filename,(curr,prev)=>{
    console.log('file changes ',curr.mtime,prev.mtime);
    
    
})