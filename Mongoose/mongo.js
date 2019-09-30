const mongoose = require("mongoose");

//config mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/teste").then(() => {
    console.log("Mongodb conectado")
}).catch((erro) => {
    console.log("Erro de conexão ao mongodb: " + erro)
})

//model mongo
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
})
//collection
mongoose.model('usuarios', UsuarioSchema)

//salvar no banco
const Usuario = mongoose.model('usuarios')

new Usuario({
    nome: "Raí",
    sobrenome: "Soledade",
    email: "rai@gmail.com",
    idade: 22,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado")
}).catch((erro) => {
    console.log("Erro ao criar usuário: " + erro)
})