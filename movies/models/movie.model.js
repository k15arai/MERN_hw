const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: String,
    yearReleased: Number,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;

// for belt exam will be simple schema
// fieldName: variable type

