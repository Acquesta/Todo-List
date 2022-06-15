module.exports = (app)=>{

    //importar o package bcryptjs
    const bcryptjs = require('bcryptjs')

    //abrir a view registro.ejs
    app.get('/registro', (req,res)=>{
        res.render('registro.ejs')
    })

    //gravar as informaões digitads no mongoAtlas
    app.post('/registro', async(req,res)=>{
        //recuperar as informações digitadas 

        //recuperar as informações do formulario
        var dados = req.body
        //verificar se o email já está cadastrado 
        //conectar com o bando de dados
        const conexao = require('../config/database')()
        //importar o modelo do usuario
        const usuarios = require('../models/usuarios')
        //procurar no campo email da collection usuarios 
        var procurar = await usuarios.findOne({email:dados.email})
        if(procurar){
            return res.send("email já cadastrado")
        }        
/*         var dados = req.body
        //importar as configurações do database 
        var database = require('../config/database')()
        //definir em qual coleção vamos gravar 
        var usuarios = require('../models/usuarios') */

        //criptografar a senha
        var senhasegura = await bcryptjs.hash(dados.senha,10)
        console.log(senhasegura)

        //gravar o documento na collection usuarios
        var documento = await
         new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        //depois que gravar redireciona para a rota login 
        res.redirect('/login')
    })
}