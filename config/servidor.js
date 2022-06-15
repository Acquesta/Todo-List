//importar o express
const express = require('express')
//executar o express 
const app = express()
//definir  aporta do servidor local
const porta = 3535

/*conteúdo aleatório inicial 
/app.get('/', (req,res)=>{
    res.send("qualquer coisa")
}) 

//ligar o servidor na porta 3535
app.listen(porta)*/

//definir a pasta dos arquivos estáticos (css,imagens, jquery)
app.use(express.static('./assets'))
//definir o express como body parse
app.use(express.urlencoded({extended:false}))

//exportar o app e a porta 
module.exports={app,porta}