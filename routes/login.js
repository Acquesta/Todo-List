module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    //abrir a view atividades
    app.post('/login',(req,res)=>{
        res.render('atividades.ejs')
    })

    //abrir a view atividades
    app.post('/login', async(req,res)=>{
        //conectar com o banco de dados 
        const conexao = require('../config/database')()
        const usuarios = require('../models/usuarios')
        //procurar pelo endereço de e-mail
        var procurar = await usuarios.findOne({email:Headers.dody.email})
        if(!procurar){
            res.send('Email não cadastrado!!')
        }
        res.render('atividades.ejs')
    })
}