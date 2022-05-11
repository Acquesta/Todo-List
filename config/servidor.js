//importar o express
const express = require('express')
//executar o express
const app = express()
//definir porta do servidor
const porta = 3535

//exportar app e porta
module.exports={app,porta}