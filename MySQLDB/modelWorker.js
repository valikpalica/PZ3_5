const sequelize = require('./connectionMysql');
const Sequelize = require('sequelize');
const Workers = sequelize.define('Workers',{
    id:{
        type: Sequelize.INTEGER,
        primatyKey:true,
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


module.exports = Workers;