const Sequlize = require('sequelize');
const config = require('./configureMysql.json');
const sequelize = new Sequlize(config.name,config.login,config.password,{
    dialect:config.dialect,
    host:config.host,
    define: {
        timestamps: false
    }
});
module.exports = sequelize;