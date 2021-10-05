const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: { type: String },
    punchline: { type: String},
    _v: 0,
    }, 
    { timestamps: true }
);

const Jokes = mongoose.model('Joke', JokesSchema);

module.exports = Jokes;