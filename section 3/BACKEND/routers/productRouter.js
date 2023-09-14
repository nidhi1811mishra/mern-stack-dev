const experss = require('express');

const product = experss.Router();

product.get('/getall',(req,res)=>{
    res.send('response from user getall')
 });




module.exports= product;