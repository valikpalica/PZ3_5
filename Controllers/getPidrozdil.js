const { Select } = require("../MySQLDB/MysqlMethodPidrozdil")


const getPidrozdil = async () =>{
   let body = await Select();
   return body;
}

module.exports = getPidrozdil;
