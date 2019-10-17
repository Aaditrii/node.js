
var http=require('http');
console.log("server is active go to number 9000");
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Hi my name is aaditri");
res.end();
}).listen(9000);