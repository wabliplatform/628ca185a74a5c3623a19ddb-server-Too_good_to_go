
const { ProductPImageSchema } =require('./ProductPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


pTitle:String , 


pCount:Number , 


pImage:  
ProductPImageSchema
 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

