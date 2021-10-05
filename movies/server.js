const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const MovieRoutes = require("./routes/movieRoutes");
// feed 'app' variable to the movieRoutes.
MovieRoutes(app);

app.listen(8000, () => console.log(`The server is all fired up on port: ${port}.`))