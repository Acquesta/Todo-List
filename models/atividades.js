//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações de atividades
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega: String,
    disciplina:String,
    instrucoes:String,
    usuario:String
})

//gravar a estrutura na model atividades
const atividades = mongoose.model('atividades',modelo)

//exportar os dados para acesso externo
module.exports = atividades