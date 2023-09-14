const express = require('express');

const Model=require ('../models/userModel');
const router = express.Router();

router.post('/add',(req,res)=>{
   res.send('response from user add')
});
router.get('/getall',(req,res)=>{
    res.send('response from user getall')
 });
 router.get('/update',(req,res)=>{
    res.send('response from user update')
 });
 router.get('/getbyid',(req,res)=>{
    res.send('response from user getbyid')
 });
 router.get('/delete',(req,res)=>{
    res.send('response from user delete')
 });

module.exports = router;

