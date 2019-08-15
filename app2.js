const Express=require('express')
var app=new Express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{        //setting route
    res.render('add',{title:"ADD BOOKS"}) 
})
app.get('/list',(req,res)=>{        
    res.render('list',{title:"VIEW BOOKS"})
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  //port number-3000