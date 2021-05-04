const Workers = require('./modelWorker');

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
      return Workers;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {}