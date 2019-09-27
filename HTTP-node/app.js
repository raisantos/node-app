var http = require('http');

http.createServer(function(req, res){
    res.end("Bem-vindo");
}).listen(8081);

console.log("O servidor foi iniciado");