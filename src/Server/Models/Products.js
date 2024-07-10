const mongoose = require('mongoose');

const product=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    ImageUrl:{
        type: String,
        required: true
    }

})

const Product= mongoose.model('Product', product);

module.exports = Product