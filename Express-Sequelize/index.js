const express = require("express");
const app = express();

app.get("/", function(req, res){
    //res.send("Bem-vindo ao meu app!");
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    //res.send("Pagina sobre");
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina blog");
});

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" +
    "<h2>Seu cargo: " + req.params.cargo + "</h2>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});