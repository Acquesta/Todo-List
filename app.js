const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

//importar a rota index.js
//const index = require('./routes/index')(app)

//importar o consign e configurar
const consign = require('consign') 
consign().include('./routes').into(app)

app.listen(porta)