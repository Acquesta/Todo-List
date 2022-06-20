module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/login', (req,res)=>{
        res.render('login.ejs')
    })

    //abrir a view atividades
    app.post('/login',async(req,res)=>{
        //conectar com o banco de dados
        const conexao = require('../config/database')()
        //importar a model usuarios 
        const usuarios = require('../models/usuarios')
        //procurar pelo endereço de email
        var procurar = await usuarios.findOne({email:req.body.email})
        if(!procurar){
          return res.send('Email não cadastrado!!')
        }
        //comparar a senha digitada com a armazenada
        const bcrypt = require('bcryptjs')
        var comparar = await bcrypt.compare(req.body.senha,procurar.senha)
        if(!comparar){
            return res.send("Senha incorreta")
        }
        console.log(procurar._id)
       //redirecionar para a rota get atividades
       res.redirect('/atividades?id='+procurar._id)
    })
}

