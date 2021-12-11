const express = require("express");
const Dev = require("../models/dev");
const router = express.Router();

router.get("/devs", function (req, res, next) {
    res.send({ type: "get" });
});

router.post("/devs", function (req, res, next) {
    // var dev = new Dev(req.body);
    // dev.save();
    Dev.create(req.body)
        .then(function (dev) {
            res.send(dev);
        })
        .catch(next); // Create new instance and saves it automatically
});

router.put("/devs/:id", function (req, res, next) {
    Dev.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Dev.findOne({ _id: req.params.id }).then(function (dev) {
            res.send(dev);
        });
    });
});

router.delete("/devs/:id", function (req, res, next) {
    Dev.findByIdAndRemove({ _id: req.params.id }).then(function (dev) {
        res.send(dev);
    });
    res.send({ type: "delete" });
});

module.exports = router;
