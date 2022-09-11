const express = require("express")
const app = express()
app.use(express.urlencoded({extended:false}))
const Router = require('./routes/find')
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/TODO',()=>{
    console.log("connect to DataBase!!")
})



app.use(Router)
app.use(express.static('public'));
app.set('view engine','ejs')//refrences
app.listen(4000,()=>{
    console.log("server is running on PORT 4000....")
})