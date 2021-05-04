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
        Pidrozdil.destroy({where:{id:id}})
    } catch (error) {
        console.log(error);
    }
}
const UpdatePidrozdil = (id,obj) =>{
    try {
        Pidrozdil.update({obj},{where:id});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {InsertPidrozdil,DeletePidrozdil,UpdatePidrozdil}