
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductPImageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { ProductPImageSchema };

