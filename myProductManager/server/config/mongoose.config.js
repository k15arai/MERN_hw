const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productmanagerhwdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to product manager hw database"))
    .catch((err) => console.log("Something when wrong when connecting to product manager hw database"));