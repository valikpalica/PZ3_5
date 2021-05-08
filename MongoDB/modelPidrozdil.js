const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pidrozdilScheme = new Schema({
    id: Number,
    name: String,
});

module.exports = pidrozdilScheme;
