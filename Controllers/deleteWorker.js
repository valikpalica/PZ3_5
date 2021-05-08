const { DeleteWorkers } = require("../MongoDB/MongoMethodWorkers");
const { DeleteWorker } = require("../MySQLDB/MysqlMethodWorker")


const deleteWorker = (id) =>{
    DeleteWorker(id);
    DeleteWorkers(id);
}

module.exports = deleteWorker;