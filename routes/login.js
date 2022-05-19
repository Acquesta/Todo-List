module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    //abrir a view atividades
    app.post('/login',(req,res)=>{
        res.render('atividades.ejs')
    })
}