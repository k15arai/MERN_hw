// import model
const Product = require('../models/product.model');

// handlers

// Create
const createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then((product) => res.json(product))
        .catch((err) => res.json(err));
};

// Read ALL
const getAllProducts = (req, res) => {
    Product.find({})
        .then((queriedProducts) => res.json(queriedProducts))
        .catch((err) => res.json(err));
};

// Read One
const getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((queriedProduct) => res.json(queriedProduct))
        .catch((err) => res.json(err));
};

// Update
const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.json(err));
};

// Delete
const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => res.json(deleteConfirmation))
        .catch((err) => res.json(err));
};

// export
module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};