const express = require('express')
const app = express()



app.get('/get',(req,res)=>{
    res.send({data:'GET'})
});



app.post('/post',(req,res)=>{
    res.send({data:'POST'})
});


app.post('/merge2',(req,res)=>{});

app.post('/merge3',(req,res)=>{});

app.post('/merge',(req,res)=>{
    res.send({data:'POST'})
});
app.listen(3000);