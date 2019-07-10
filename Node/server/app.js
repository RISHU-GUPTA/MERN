var fs=require('fs');
var path= require('path');
const http=require('http');
var server=http.createServer(handleRequestAndResponse);
server.listen(2525,()=>{
    console.log('server started');
});
function handleRequestAndResponse(request,response){
    console.log(request.url);
    console.log(request.method);
    if(request.url=='/index.html'){
        var newpath=path.join(__dirname,'/public/index.html');
        var readstream=fs.createReadStream(newpath);
        readstream.pipe(response);
    }
    else{
        response.write('Hello I am server');
        response.end();
    }

}