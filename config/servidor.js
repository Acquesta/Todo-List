//importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor local
const porta = process.env.PORT || 2323

//definir a pasta dos arquivos estaticos (css, imagens, jquery)
app.use(express.static('./assets'))

//definir o express como body parse
app.use(express.urlencoded({extended:false}))

//exportar o app e a porta
module.exports={app,porta}
