const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name:{
        type: String
    },
    price:{
        type: String
    },
    user: [{type: Schema.Types.ObjectId, ref: 'User'}]
});


const Product = mongoose.model("Product", productSchema);


module.exports = Product;

