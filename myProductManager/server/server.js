const express = require('express');
const cors = require('cors')
const app = express();
require('./config/mongoose.config.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Product Manager server listening on port: ${port}`));

