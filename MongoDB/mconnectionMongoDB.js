const mongoose = require("mongoose");
const configure = require('./configureMongoDB.json');
try {
    mongoose.connect(configure.link,{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false},()=>{
        console.log('mongoDB connected');
    });
} catch (error) {
    console.log('err ' + error);
}

const Workers = mongoose.model('Workers',require('./modelWorker'));
const Pidrozdil = mongoose.model('Pidrozdil',require('./modelPidrozdil'));
const Posada = mongoose.model('Posada',require('./modelPosada'));

module.exports = {Workers,Pidrozdil,Posada};

