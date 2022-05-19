module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar os dados do formulário no database 
    app.post('/registro', (req,res)=>{
        //recuperar as informações do foormulário
        var dados = req.body
        //exibir o conteúdo de dados no console
        console.log(dados)
    })
}