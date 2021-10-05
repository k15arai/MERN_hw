const Movie = require("../models/movie.model");

const healthCheck = (req, res) => {
    res.send("this is setup correctly - KA");
};

// create new movie in mongodb
// const addNewMovie = (req, res) => {
//     const { body } = req;
//     Movie.create(body)
//         .then((newMovie) => res.json(newMovie))
//         .catch((err) => console.log(err));
//     // res.send("new movie endpoint -KA");
//     res.json(newMovie);
// };

// create new movie in mongodb - be more specific
const addNewMovie = (req, res) => {
    const { body } = req;
    console.log(body);
    Movie.create({
        title: body.title,
        yearReleased: body.yearReleased,
    })
        .then((newMovie) => res.json(newMovie)) // newMovie only available to this callback function
        .catch((err) => console.log(err));
}

// get all movies in db
const getAllMovies = (req, res) => {
    Movie.find()
        .then((queriedMovies) => res.json(queriedMovies)) // queriedMovies only available to this callback function
        .catch((err) => console.log(err));
};

// use id in URL to query databse for the movie document that has that 
const getMovieById = (req, res) => {
    const { params } = req;
    console.log(params);
    Movie.findOne({ _id: params._id })
        .then(queriedDoc => res.json(queriedDoc))
        .catch((err) => console.log(err));
};

const updateMovieById = (req, res) => {
    console.log(req.params);
    Movie.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true, // this returns the document once updated
        runValidators: true,
    })
        .then((updatedMovie) => res.json(updatedMovie))
        .catch((err) => console.log(err));
};

const deleteMovie = (req, res) => {
    Movie.deleteOne({_id: req.params._id})
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
}

module.exports = {
    healthCheck,
    addNewMovie,
    getAllMovies,
    getMovieById,
    updateMovieById,
    deleteMovie,
};