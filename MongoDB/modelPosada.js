const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posadaScheme = new Schema({
    id: Number,
    name: String,
    id_worker:Number,
    id_pidrozdil:Number,
});

module.exports = posadaScheme;