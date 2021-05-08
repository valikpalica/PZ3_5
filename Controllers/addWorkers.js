const { AddWorkers } = require("../MongoDB/MongoMethodWorkers");
const { InsertWorkers } = require("../MySQLDB/MysqlMethodWorker")

const InsertWorker = (obj) =>{
    InsertWorkers(obj);
    AddWorkers(obj);
}

module.exports = InsertWorker;