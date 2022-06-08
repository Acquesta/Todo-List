const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{

    //criar rota para renderizar a view atividades
    app.get('/atividades', async(req,res)=>{
        //capturar id da barra de endereço
        var id = req.query.id   
        //buscar o nmome da colection usuarios
        var user = await usuraio.findOne({_id:id})
        //buscar todas as atividades desse usuario
        var buscar = await atividades.findOne({usuario:id})
        //console.log(buscar)
        res.render('atividades.ejs', {nome:user.nome,id:user._id,dados:buscar}) 
    })

    app.post('/atividades', async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //axibindo no terminal
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulario no database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            materia:dados.materia,
            instrucoes:dados.orientacoes,
            usuario:dados.id    
        }).save()

        //console.log(buscar)
        res.render('atividades.ejs', {nome:dados.nome,id:dados.id,dados:buscar})
    })

    //excluir atividades
    app.get('/excluir', async (req,res)=>{
        //recuperar o parametro id da base de endereço
        var id = req.query.id
        var excluir = await atividades.findOneAndRemove({
            _id:id
        })
        console.log(id)

        //redirecionar para rota atividades
        res.redirect('/atividades?id='+excluir.usuario)
    })
}