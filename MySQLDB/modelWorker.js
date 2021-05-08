const sequelize = require('./connectionMysql');
const Sequelize = require('sequelize');
const Posada = require('./modelPosada');
const Workers = sequelize.define('Workers',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allownull:false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    surname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    patronime:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rank:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date:{
        type: Sequelize.STRING,
        allowNull: false
    },
});
Workers.hasMany(Posada,{onDelete:'cascade', foreignKey:'id_worker'})
module.exports = Workers;