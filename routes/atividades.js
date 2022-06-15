const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{
    //criar a rota para renderizar a view atividades
    app.get('/atividades', async(req,res)=>{
    //capturar o id da barra de endereço
    var id = req.query.id
    //buscar o nome na collection usuarios
    var user = await usuarios.findOne({_id:id})
    //buscar todas as atividades desse usuário 
    var buscar = await atividades.find({usuario:id}) //esse find q gera os dados
    //console.log(buscar)
    res.render('atividades.ejs',{nome:user.nome,id:user._id,dados:buscar}) //n ta reconhecendo dados.nome, por isso colocou use.nome / se colocar _ no id vai buscar na collection atividades, mas o id corresponde ao documento da tividade e não do usuario, ent qnd ta mandando o id da atividade dentro não vai funcionmar, tem q ser o id do user
    })

    //gravar as informações
    app.post('/atividades', async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //exibindo no terminal 
        console.log(dados)
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulário no database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            instrucoes:dados.orientacao,
            disciplina:dados.disciplina,
            usuario:dados.id
        }).save()
       
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+dados.id)
    })

    //excluir atividades
    app.get("/excluir", async(req,res)=>{
        //recuperar o parâmetro id da barra de endereço
        var id = req.query.id
        var excluir = await atividades.findOneAndRemove({ //pd ser findOneAndDelete tbm, faz same coisa
            _id:id
        })
        //redirecionar para  a rota atividades
        res.redirect('/atividades?id='+excluir.usuario)
    })

    
}

//registro ok, login ok, mas gravou, erro: objeto teve o valor vazio da comparação id model usuarios
//nos campos tipo hidden estao sem valor, só o nome tem value. logo, achamos o problem
//qm mandou as informações p o cara atividades é o cara login (Mas ta certo pq no ele taprpcurando e levando id)