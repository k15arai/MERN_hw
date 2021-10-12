const Author = require('../models/author.models');

// Health Check
const index = (req, res) => {
    res.json({
        message: "Hello World"
    });
};

// Create
const createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name,
    })
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err));
};

// Read All
const findAllAuthors = (req, res) => {
    Author.find()
        .then((alltheAuthors) => res.status(200).json(alltheAuthors))
        .catch((err) => res.status(400).json(err));
};
// Read One
const findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((oneSingleAuthor) => res.status(200).json(oneSingleAuthor))
        .catch((err) => res.status(400).json(err));
};
// Update
const updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedAuthor) => res.status(200).json(updatedAuthor))
        .catch((err) => res.status(400).json(err));
};
// Delete
const deleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(200).json(err));
};

module.exports = {
    index,
    createAuthor,
    findAllAuthors,
    findOneAuthor,
    updateOneAuthor,
    deleteOneAuthor,
};