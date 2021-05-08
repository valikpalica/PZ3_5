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
const UpdatePosadaMysql = (obj,id)=>{
    try {
        Posada.update(obj,{where:{id:id}})
    } catch (error) {
        console.log(error);
    }
}
const Select = async () =>{
    try {
        let body = await Posada.findAll({raw:true});
        return body;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {InsertPosada,DeletePosada,UpdatePosadaMysql,Select};