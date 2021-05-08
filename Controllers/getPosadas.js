const { Select } = require("../MySQLDB/MysqlMethodPosada");

const getPosadas = async () =>{
   let body = await Select();
   return body;
}

module.exports = getPosadas;