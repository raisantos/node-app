const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'raisantos', 'santosFC1!', {
    host: "localhost",
    dialect: 'mysql'
});

//model postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true});

//model usuario
const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})
//Usuario.sync({force: true});

//inserção de dados
/*Postagem.create({
    titulo: "Titulo 1",
    conteudo: "Conteudo 1"
});*/

Usuario.create({
    nome: "Rai",
    sobrenome: "Soledade",
    idade: 22,
    email: "rai@gmail.com"
});
//teste de conexão
/*sequelize.authenticate().then(function (){
    console.log("Conectado ao banco com sucesso!");
}).catch(function (erro){
    console.log("Falha ao conectar no banco: " + erro);
});*/