module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
}