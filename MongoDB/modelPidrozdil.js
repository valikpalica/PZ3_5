const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pidrozdilScheme = new Schema({
    id: Number,
    name_pidrozdil: String,
},{
    _id:false,
});

module.exports = pidrozdilScheme;
