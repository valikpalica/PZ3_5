const sequelize = require('./connectionMysql');
const Sequelize = require('sequelize');
const Posada = sequelize.define('Posada',{
    id:{
        type: Sequelize.INTEGER,
        primatyKey:true,
        allownull:false,
    },
    name:{
        type:Sequelize.STRING,
        allownull:false,
    },
    id_posada:{
        type:Sequelize.INTEGER,
        allownull:false,
    },
    id_pidrozdil:{
        type:Sequelize.INTEGER,
        allownull:false,
    }
});


module.exports = Posada;