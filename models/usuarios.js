//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuário 
const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

//gravar a estrutura na model usuários
const usuarios = mongoose.model('usuarios',modelo)

//exportar os dados para acesso externo
module.exports = usuarios