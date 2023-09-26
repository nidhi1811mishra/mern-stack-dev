const experss = require('express');

const Model = require('../models/productModel');

const product = experss.Router();

product.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('response from user add')
    new Model(req.body).save() 
   .then((result)=>{
      res.json(result);
   })
   .catch((err)=>{
      res.status(500).json(err);
   })

});


product.get('/getbyid/:id',(req, res)=>{
   // res.send('response from user getbyid');
   Model.findById(req.params.id)
   .then((result)=>{
      res.json(result);
   })
   .catch((err)=>{
      res.status(500).json(err);
   })
 });

 product.get('/getall',(req,res)=>{
   //  res.send('response from user getall')
   Model.find({})
   .then((result)=>{
      res.json(result);
   })
   .catch((err)=>{
      console.log(err);
      res.status(500).json(err);
   })
 });

 product.get('/getbyemail/:email',(req, res)=>{
   console.log(req.params.email)
   // res.send('response from user getbyemail');
   Model . findOne({email:req.params.email})
   .then((result)=>{
      res.json(result);
   })
   .catch((err)=>{
      console.log(err);
      res.status(500).json(err);
   })
 });
 product.get('/getbyid/:id',(req, res)=>{
   // res.send('response from user getbyid');
   Model.findById(req.params.id)
   .then((result)=>{
      res.json(result);
   })
   .catch((err)=>{
      res.status(500).json(err);
   })
 });
 product.put('update/:id',(req,res)=>{
 model.findByIdAndUpdate(req.params.id,req.body, {new:true})
 .then((result)=>{
   res.json(result);
 })
 .catch((err)=>{
   res.status(500).json(err);
 })
 });
 product.delete('/delete/:id',(req,res)=>{
   //  res.send('response from user delete')
    Model.findByIdAndDelete(req.params.id)
    .then((result)=>{
       res.json(result);
    })
    .catch((err)=>{
       res.status(500).json(err);
    })
 });




module.exports = product;