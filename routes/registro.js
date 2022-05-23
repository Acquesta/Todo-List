module.exports = (app)=>{
    //importar o package bcryptjs
    const bcrypt = require('bcryptjs')

    //abrir a view login.ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar os dados do formulário no database 
    app.post('/registro', async(req,res)=>{
        //recuperar as informações do foormulário
        var dados = req.body
        //verificar se o e-mail ja está cadastrado
        //canectar com o banco de dados 
        const conexao = require('../config/database')()
        //importar o modelo usuários
        const usuarios = require('../models/usuarios')
        //procurar no campo e-mail da colecttion usuarios
        var procurar = await usuarios.findOne({email:dados.email})
        if(procurar){
            return res.send("email já cadastrado")
        }
        //cripitografar a senha 
        var senhasegura = await bcrypt.hash(dados.senha,10)
        console.log(senhasegura)

        //gravar o documento na collection usuarios
        var documento = await new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        //depois que gravar redirect para a rota login
        res.redirect('/login')
    })
}