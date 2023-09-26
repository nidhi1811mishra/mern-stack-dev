const {Schema, model}=require('../connection');

const myschema =new Schema({
    name:String,
    brand:String,
    model:String,
    price:String
});
module.exports=model('product',myschema);