//importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor local
const porta = 3535

//definir a pastas dos arquivos estaticos (css, imagens, jquery)
app.use(express.static('./assets'))

//exporta o app e a porta
module.exports={app,porta}