// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

const cors= require('cors');
//initialize express
const app = express();
const port = 5000;

// middel ware
//parse json data
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use('/user', userRouter );
app.use('/product',productRouter);
 
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