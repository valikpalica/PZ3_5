const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posadaScheme = new Schema({
    id: Number,
    name_posada: String,
    id_user:Number,
    id_pidrozdil:Number,
},{
    _id:false,
});

module.exports = posadaScheme;