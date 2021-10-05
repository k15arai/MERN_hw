const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    // Health Check
    app.get("/api/jokeshealthcheck", JokesController.healthCheck);

    // Create - Add Joke
    app.post("/api/jokes", JokesController.addNewJoke);

    // Read - Find All / Find One
    app.get("/api/jokes", JokesController.getAllJokes);
    app.get("/api/jokes/:_id", JokesController.getJokeById);

    // Update - Update One Joke
    app.put("/api/jokes/:_id", JokesController.updateJokeById);

    // Delete - Delete One Joke
    app.delete("/api/jokes/:_id", JokesController.deleteJokebyId);
}