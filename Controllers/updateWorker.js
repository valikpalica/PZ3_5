const { UpdateWorkers } = require("../MongoDB/MongoMethodWorkers");
const { Update } = require("../MySQLDB/MysqlMethodWorker");

const UpdateWorker = (id,obj) =>{
    UpdateWorkers(id,obj);
    Update(id,obj);
};

module.exports = UpdateWorker;