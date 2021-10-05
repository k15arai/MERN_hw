const Jokes = require("../models/jokes.model");

// Check this route in Postman
const healthCheck = (req, res) => {
    res.send("this is setup correctly - KA");
};

// CREATE
const addNewJoke = (req, res) => {
    const { body } = req;
    Jokes.create({
        setup: body.setup,
        punchline: body.punchline, 
    })
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log(err));
};

// READ ALL / READ ONE
const getAllJokes = (req, res) => {
    Jokes.find()
        .then((queriedJokes) => res.json(queriedJokes))
        .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
    Jokes.findOne({ _id: req.params._id })
        .then((queriedDoc) => res.json(queriedDoc))
        .catch((err) => console.log(err));
};

const updateJokeById = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ message: 'Something went wrong with updating the joke', error: err }));
};

const deleteJokebyId = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: 'Something went wrong when deleting the joke', error: err }));
};


// Bottom - Module Exports
module.exports = {
    // Enter functions here
    healthCheck,
    addNewJoke,
    getAllJokes,
    getJokeById,
    updateJokeById,
    deleteJokebyId
};