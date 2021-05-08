const {SelectWorkers} = require('../MySQLDB/MysqlMethodWorker');

const getId = async () =>{
    const data = await SelectWorkers();
    let res = (data.length==0?0:data[data.length-1].id)+1;
    return res;
};

module.exports = getId; 