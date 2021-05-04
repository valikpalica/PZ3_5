const sequelize = require('./connectionMysql');
const Sequelize = require('sequelize');
const Pidrozdil = sequelize.define('Pidrozdil',{
    id:{
        type: Sequelize.INTEGER,
        primatyKey:true,
        allownull:false,
    },
    name:{
        type:Sequelize.STRING,
        allownull:false,
    }
});


module.exports = Pidrozdil;