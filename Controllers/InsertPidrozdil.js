const {InsertPidrozdil} = require('../MySQLDB/MysqlMethodPidrozdil');
const {AddPidrozdil} = require('../MongoDB/MongoMethodPidrozdil');
const InsertPid = (obj) =>{
    InsertPidrozdil(obj);
    AddPidrozdil(obj);
}
module.exports = InsertPid;