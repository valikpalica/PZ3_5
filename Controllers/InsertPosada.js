const { AddPosada } = require("../MongoDB/MongoMethodPosada");
const { InsertPosada } = require("../MySQLDB/MysqlMethodPosada")

const InsertPos = (obj)=>{
    InsertPosada(obj);
    AddPosada(obj);
}

module.exports = InsertPos;