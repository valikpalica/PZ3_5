const { DeleteInfoWorkers } = require("../MongoDB/MongoMethodWorkers");
const { DeleteInfo } = require("../MySQLDB/MysqlMethodWorker");

const deleteInfo = (id,option) =>{
    DeleteInfo(id,option);
    DeleteInfoWorkers(id,option);
};

module.exports = deleteInfo;