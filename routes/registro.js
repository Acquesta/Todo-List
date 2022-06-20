const bcryptjs = require('bcryptjs')

module.exports = (app)=>{
    //importar o package bcryptjs
    const bcryptjs = require('bcryptjs')

    //abrir a view registro.ejs
    app.get('/registro', (req,res)=>{
        res.render('registro.ejs')
    })

    //gravar os dados do formulário no database
    app.post('/registro',async(req,res)=>{
        //recuperar as informações do formulário
        var dados = req.body
        //verificar se o email ja está cadastrado
        //conectar com o banco de dados
        const conexao = require('../config/database')()
        //importar o modelo usuarios
        const usuarios = require('../models/usuarios')
        //procurar no campo email da collection usuarios
        var procurar = await usuarios.findOne({email:dados.email})
        if(procurar){
            return res.send("email já cadastrado")
        }
        //criptografar a senha
        var senhasegura = await bcryptjs.hash(dados.senha,10)
        console.log(senhasegura)

        //gravar o documento na collection usuarios
       var documento = await new usuarios({
           nome:dados.nome,
           email:dados.email,
           senha:senhasegura
       }).save()
       //depois que grava redireciona para a rota login
           res.redirect('/login')
       })
    }