//importar o mongoose
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://LorenzoAcquesta:lolo0506@cluster0.umqxy.mongodb.net/')
}

//exportar as informações para acesso externo
module.exports = conn
