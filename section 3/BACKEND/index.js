// import express
const express = require('express');

//initialize express
const aap = express();
const port = 5000;
 
aap.get('/',(req, res)=>{
    res.send('respons from express')
})

aap.get('/add',(req,res)=>{
    res.send('response from add')
})


//startin the server
aap.listen(port,()=>{console.log('server started')});