const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating GeoLocation Schema
const GeoSchema = new Schema({
    // name of Schema tag
    type: {
        type: String, // Property Type
        default: "Point",
    },
    coordinates: {
        type: [Number],
        index: "2dsphere",
    },
});
// Create Dev Schema & model
const DevSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name Field is required"],
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false,
    },
    geometry: GeoSchema,
});

const Dev = mongoose.model("dev", DevSchema);

module.exports = Dev;
