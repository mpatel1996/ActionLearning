const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/devsdb");
mongoose.Promise = global.Promise;

app.use(express.static("./public"));
app.use(bodyParser.json());

// routes for api's with api parameter pathway
app.use("/api", routes);

// error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({
        error: err.message,
    });
});

module.exports = app.listen(process.env.port || 8000, function () {
    console.log("Listening to Port");
});
