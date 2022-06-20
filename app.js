const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

//importar a rota index.js (sem usar o consign)
//const index = require('./routes/index')(app)

//impotar o consign e conigurar
const consign = require('consign')
consign().include('./routes').into(app)

app.listen(porta,()=>{
    console.log("http://localhost:"+porta)
})