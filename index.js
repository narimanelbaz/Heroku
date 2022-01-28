const express = require('express')
const app = express()

app.get('/' , function(req, res){
    res.send("Welcome to cloud !!")
})

app.listen(process.env.PORT || 2000,()=>{
    console.log('listen on 2000')
})