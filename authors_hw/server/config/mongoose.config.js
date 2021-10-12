const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authorshwdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the Authors HW database'))
    .catch((err) => console.log('Something went wrong when connecting to the Authors HW database', err));