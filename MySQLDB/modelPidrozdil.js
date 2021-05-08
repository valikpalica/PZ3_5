const sequelize = require('./connectionMysql');
const Sequelize = require('sequelize');
const Posada = require('./modelPosada');
const Pidrozdil = sequelize.define('Pidrozdil',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allownull:false,
        
    },
    name:{
        type:Sequelize.STRING,
        allownull:false,
    }
});
Pidrozdil.hasMany(Posada,{onDelete:'cascade', foreignKey:'id_pidrozdil'})
module.exports = Pidrozdil;