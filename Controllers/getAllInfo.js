const {SelectAllInfo} = require('../MySQLDB/MysqlMethodWorker');

const GetAllInfo = async (id_w) =>{
    let result = await SelectAllInfo(id_w);
    let {id,name,surname,patronime,rank,date,Posadas} = result.infoPerson.dataValues;
    let dataWorker = {id,name,surname,patronime,rank,date};
    let dataPosada = Posadas[0].dataValues;
    let dataPidrozdil  = result.infoPidrozdil.dataValues;
    return {dataWorker,dataPosada,dataPidrozdil};
}

module.exports = GetAllInfo;