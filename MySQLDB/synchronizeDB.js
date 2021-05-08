const sequelize = require('./connectionMysql');
const Posada = require('./modelPosada');
const Worker = require('./modelWorker');
const Pidrozdil = require('./modelPidrozdil');
try {
    sequelize.sync({alert:true}).then(()=>{
        console.log("Mysql DB connected")
})
} catch (error) {
    console.log(error);
}
//{ force: true }