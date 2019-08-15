const Express=require('express')
var app=new Express()
books=[
    {
        'title':'RAndaamoozham',
        'author':'M T Vasudevan Nair',
        'publisher':'Cuurent Books',
        'date_of_publication':'Dec 1984',
        'distributor':'D C Books',
        'price':299,
        'description':'Malayalam Classic Novel'
    },
    {
        'title':'Araachar',
        'author':'K R Meera',
        'publisher':'D C Books',
        'date_of_publication':'1 Nov 2012',
        'distributor':'D C Books',
        'price':225,
        'description':'Malayalam Novel'
    },
    {
        'title':'Khasakkinte ithihasam',
        'author':'O V Vijayan',
        'publisher':'D C Books',
        'date_of_publication':'1969',
        'distributor':'D C Books',
        'price':159,
        'description':'Malayalam Classic Novel'
    },
    {
        'title':'Balyakalasakhi',
        'author':'Vaikkam Muhammad Bashir',
        'publisher':'D C Books',
        'date_of_publication':1944,
        'distributor':'D C Books',
        'price':85,
        'description':'Malayalam Classic Novel'
    },
    {
        'title':'Neermathalam Poothakalam',
        'author':'Madhavikkutty',
        'publisher':'Curent Books',
        'date_of_publication':'Dec 1984',
        'distributor':'D C Books',
        'price':299,
        'description':'Malayalam Classic Novel'
    }

]
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