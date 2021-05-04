const Posada = require('./modelPosada');

const InsertPosada = (obj) => {
    try {
        Posada.create(obj);
    } catch (error) {
        console.log(error);
    }
}
const DeletePosada = (id)=>{
    try {
        Posada.destroy({where:{id}});
    } catch (error) {
        console.log(error);
    }
}
const UpdatePosada = (obj,id)=>{
    try {
        Posada.update(obj,{where:{id}})
    } catch (error) {
        console.log(error);
    }
}
module.exports = {InsertPosada,DeletePosada,UpdatePosada};