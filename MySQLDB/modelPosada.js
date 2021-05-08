const Sequelize = require('sequelize');
const sequelize = require('./connectionMysql');

const Posada = sequelize.define('Posada',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allownull:false,
        
    },
    name:{
        type:Sequelize.STRING,
        allownull:false,
    },
});


module.exports = Posada;