const express = require("express");
const app = express();
const port = 8000;

// positional arguments
// request 'req' is all information relating to request sent from client, like form data
// response 'res' deals with sending client back response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World - KA" }); // stay away from res.send - javascript object notation needs key notation
});

app.get("/api/send-object", (req, res) => {
    const obj = {
        'a': 1,
        'b': 2,
    };
    res.json(obj);
});



// still need to do something to server.js file, but right now not working
// app.post("/api/item", (req, res) => {
//     console.log(req.body);
//     res.json("all is well");
// });

// make sure to put this in, probably after you set up the const=app
app.listen(port, () => console.log("express server running on port", port));
