const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:   {
                type: String
            },
    email:{
            type: String
    },
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});



const User = mongoose.model("User", userSchema);

module.exports = User;


