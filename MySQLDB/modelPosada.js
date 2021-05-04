const Sequelize = require('sequelize');
const sequelize = require('./connectionMysql');
const Posada = sequelize.define('Posada',{
    id_posada:{
        type: Sequelize.INTEGER,
        primatyKey:true,
        allownull:false,
    },
    name:{
        type:Sequelize.STRING,
        allownull:false,
    },
    id_worker:{
        type:Sequelize.INTEGER,
        allownull:false,
    },
    id_pidrozdil:{
        type:Sequelize.INTEGER,
        allownull:false,
    }
});

module.exports = Posada;