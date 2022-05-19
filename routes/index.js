module.exports= (app)=>{

    //rota aleatoria
app.get('/',(req,res)=>{
   // res.send('qualquer coisa')
   res.render('index.ejs')
})
}