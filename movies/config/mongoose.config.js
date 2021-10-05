const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/movies_september', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("mongoose is connected to local db -KA"))
    .catch(err => console.log("error connecting to mongobd -KA", err));
