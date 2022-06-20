const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{
    app.get('/atividades',async(req,res)=>{
        //capturar o id da barra de endereço
        var id = req.query.id
        //buscar o nome na collection usuarios
        var user = await usuarios.findOne({_id:id})  
        //buscar todas as atividades desse usuário
        var abertas = await atividades.find({usuario:id,status:0}).sort({data:1})
        //buscar todas as atividades desse usuário
        var entregues = await atividades.find({usuario:id,status:1}).sort({data:1})
        //buscar todas as atividades desse usuário
        var excluidas = await atividades.find({usuario:id,status:2}).sort({data:1})
        //console.log(buscar)
        //res.render('atividades.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})
        //res.render('accordion.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})
        res.render('atividades2.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})
        
    })
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //console.log(dados)
        //conectar com o database
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulário no database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instrucoes:dados.orientacao,
            usuario:dados.id
        }).save()
        res.redirect('/atividades?id='+dados.id)
    })

     app.get("/excluir",async(req,res)=>{
    //recuperar o parametro id da barra de endereço
        var id = req.query.id
        var excluir = await atividades.findOneAndUpdate(
            {_id:id},
            {status:2}
        )
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+excluir.usuario)
    })

app.get("/entregue",async(req,res)=>{
    //recuperar o parametro id da barra de endereço
        var id = req.query.id
        var entregue = await atividades.findOneAndUpdate(
            {_id:id},
            {status:1}
        )
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+entregue.usuario)
    })

    app.get("/desfazer",async(req,res)=>{
        //recuperar o parametro id da barra de endereço
            var id = req.query.id
            var desfazer = await atividades.findOneAndUpdate(
                {_id:id},
                {status:0}
            )
            //redirecionar para a rota atividades
            res.redirect('/atividades?id='+desfazer.usuario)
        })

        //criar a rota alterar
        app.get('/alterar',async(req,res)=>{
            //capturar o id(atividade) da barra de endereço
            var id = req.query.id

            //buscar a atividade que será alterada
            var alterar = await atividades.findOne({_id:id})  

            //buscar o nome na collection usuarios
            var user = await usuarios.findOne({_id:alterar.usuario})
            
            res.render('alterar.ejs',{nome:user.nome,id:user._id,dados:usuarios})

            //console.log(dados.date.getFullYear(), dados.date.getMonth()+1, dados.date.getDate()+1)
    
        })

}



