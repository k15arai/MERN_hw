const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "The product name is required."],
        minlength: [3, "Product name must be at least 3 characters long."]
    },
    price: { 
        type: Number,
        required: [true, "Product needs a price of at least $0.01"],
        min: [.01, "Price must be at least more than $0.01."] 
    },
    description: { 
        type: String,
        required: [true, "Product description required."],
    }
}, 
    { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);