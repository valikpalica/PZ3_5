const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
const userScheme = new Schema({
    id:Number,
    name: String,
    surname: String,
    patronime: String,
    rank: String,
    date: String,
},{
    _id:false,
});

module.exports = userScheme;