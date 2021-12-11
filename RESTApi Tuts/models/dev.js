const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Dev = mongoose.model("dev", DevSchema);

module.exports = Dev;