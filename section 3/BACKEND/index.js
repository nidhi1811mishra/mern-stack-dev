// import express
const express = require('express');
const userRouter = require('./routers/userRouter');

const productRouter = require('./routers/productRouter');
//initialize express
const app = express();
const port = 5000;
app.use('/user', userRouter );
 
app.get('/',(req, res)=>{
    res.send('respons from express')
})

app.get('/add',(req,res)=>{
    res.send('response from add')
})
app.get('/getall',(req,res)=>{
    res.send('response from getall')
})
app.get('/update',(req,res)=>{
    res.send('response from update')
})


//startin the server
app.listen(port,()=>{console.log('server started')});