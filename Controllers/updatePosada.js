const { UpdatePosadaMysql } = require("../MySQLDB/MysqlMethodPosada");
const {UpdatePosadaMongo} = require('../MongoDB/MongoMethodPosada');
const UpdatePosada = (id,obj) =>{
    UpdatePosadaMysql(id,obj);
    UpdatePosadaMongo(id,obj);
}
module.exports = UpdatePosada;