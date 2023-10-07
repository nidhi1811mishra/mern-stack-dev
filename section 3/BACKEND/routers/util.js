const multer = require('multer');
const express= require ('express');
const router = express.Router();

const mystorage = multer.diskStorage({
    destination: (req, file, cb)=>{
       cb(null,'./uploads') 
    },
    filename: (req, file, cb)=>{
        cb(null,file.originalname) 
     },
})
const uploader= multer({storage : mystorage});

router. post ('/uploadfile',uploader.single('myfile'),(req,res)=>{
    res.send({message : 'file uploaded'});
})


module.exports=router;