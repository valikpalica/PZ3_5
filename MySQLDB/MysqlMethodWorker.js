const Workers = require('./modelWorker');
const Posada = require('./modelPosada');
const Pidrozdil = require('./modelPidrozdil');

const InsertWorkers = (obj)=>{
    try {
        Workers.create(obj);
    } catch (error) {
        console.log(error);
    }
}
const DeleteWorker = (id)=>{
    try {
        Workers.destroy({where:{id:id}})
    } catch (error) {
        console.log(error);
    }
}
const Update =(id,obj)=>{
    try {
        Workers.update(obj,{where:{id:id}});
    } catch (error) {
        console.log(error);
    }
}
const DeleteInfo = (id,option) =>{
    try {
        Workers.update({[option]:''},{where:{id:id}});
    } catch (error) {
        console.log(error);
    }
}
const SelectWorkers = async () =>{
    try {
      let workers = await Workers.findAll({raw:true});
      return workers;
    } catch (error) {
        console.log(error);
    }
}
const SelectAllInfo = async (id) =>{
    try {
        const infoPerson = await Workers.findOne({where:{
                id:id
        },
        include:[{
            model:Posada,
            where:{
                id_posada:id_worker
            }
        },{
            model:Pidrozdil,
            where:{
                id_pidrozdil:id_worker
            }
        }]
    });
    return infoPerson;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {InsertWorkers,DeleteWorker,Update,DeleteInfo,SelectWorkers,SelectAllInfo};