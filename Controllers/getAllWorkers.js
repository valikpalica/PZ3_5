const {SelectWorkers} = require('../MySQLDB/MysqlMethodWorker');

const GetAllWorkers = async () =>{
    const data = await SelectWorkers();
    return data;
}

module.exports = GetAllWorkers;