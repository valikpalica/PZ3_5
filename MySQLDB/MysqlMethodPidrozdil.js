const Pidrozdil = require('./modelPidrozdil');

const InsertPidrozdil = (obj) =>{
    try {
        Pidrozdil.create(obj);
    } catch (error) {
        console.log(error);
    }
}
const DeletePidrozdil = (id) =>{
    try {
        Pidrozdil.destroy({where:{id}})
    } catch (error) {
        console.log(error);
    }
}
const UpdatePidrozdilMysql = (id,obj) =>{
    try {
        Pidrozdil.update(obj,{where:{id:id}});
    } catch (error) {
        console.log(error);
    }
}
const Select = async () => {
    try {
        let body  = await Pidrozdil.findAll({raw:true})
        return body;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {InsertPidrozdil,DeletePidrozdil,UpdatePidrozdilMysql,Select};