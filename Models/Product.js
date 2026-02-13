const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },

    price:{
        type:Number
    }

});

module.exports = mongoose.model('Product' , ProductSchema);