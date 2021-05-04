const Sequlize = require('sequelize');
const config = require('./configureMysql.json');
const sequelize = new Sequlize(config.name,config.login,config.password,{
    dialect:config.dialect,
    host:config.host,
    define: {
        timestamps: false
    }
});
try {
    sequelize.sync({alert:true}).then(()=>{
        console.log("Mysql DB connected");
})
} catch (error) {
    console.log(error);
}
module.exports = sequelize;