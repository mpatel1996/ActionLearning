const express = require("express");
const Dev = require("../models/dev");
const router = express.Router();

router.get("/devs/all", function (req, res, next) {
    Dev.find()
        .then(function (dev) {
            res.send(dev);
        })
        .catch(next);
});

router.get("/devs/:id", function (req, res, next) {
    Dev.findById({ _id: req.params.id })
        .then(function (dev) {
            res.send(dev);
        })
        .catch(next);
});

router.get("/devs", function (req, res, next) {
    Dev.aggregate()
        .near({
            near: {
                type: "point",
                coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
            },
            maxDistance: 88000, // in 100km
            spherical: true,
            distanceField: "dist.calculated",
        })
        .then(function (devs) {
            // console.log(devs);
            res.send(devs);
        })
        .catch(next);
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
});

module.exports = router;
