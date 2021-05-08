const {Select} = require('../MySQLDB/MysqlMethodPosada')
const getIdPid = async () =>{
    const data = await Select();
    let res = (data.length==0?0:data[data.length-1].id)+1;
    return res;
};

module.exports = getIdPid; 