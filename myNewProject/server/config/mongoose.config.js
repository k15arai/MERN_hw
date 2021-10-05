const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection with crmdb database - KA"))
    .catch((err) => console.log("Something went wrong when connecting to crmdb database - KA", err));