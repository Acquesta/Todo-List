module.exports = (app)=>{
    app.post('/atividades', async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //axibindo no terminal
        //console.log(dados)
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulario no database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            instrucoes:dados.orientacoes,
            usuario:dados.id
        }).save()

        //buscar todas as atividades desse usuário 
        var buscar = await atividades.find({usuario:dados.id})
        //console.log(buscar)
        res.render('atividades.ejs', {nome:dados.nome,id:dados.id,dados:buscar})
    })
}