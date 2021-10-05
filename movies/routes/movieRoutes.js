const movieController = require("../controllers/movie.controller");

// Exports all of these routes to the server.js file
module.exports = (app) => {
    app.get("/api/healthcheck", movieController.healthCheck);
    app.post("/api/movies", movieController.addNewMovie);
    app.get("/api/movies", movieController.getAllMovies);
    app.get("/api/movies/:_id", movieController.getMovieById); // pay attention to what's after the ':' that will be used in the controllers
    app.put("/api/movies/:_id", movieController.updateMovieById);
    app.delete("/api/movies/:_id", movieController.deleteMovie);
};