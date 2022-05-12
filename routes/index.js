module.exports = (app)=>{
    
    //rota aleatória
    app.get('/', (req,res)=>{
        res.render('index.ejs')
    })

}