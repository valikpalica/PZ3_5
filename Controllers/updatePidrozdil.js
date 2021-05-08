const { UpdatePidrozdil } = require("../MongoDB/MongoMethodPidrozdil");
const { UpdatePidrozdilMysql } = require("../MySQLDB/MysqlMethodPidrozdil");

const UpdatePidroz = (id,obj) =>{
    UpdatePidrozdilMysql(id,obj);
    UpdatePidrozdil(id,obj);
}

module.exports = UpdatePidroz;