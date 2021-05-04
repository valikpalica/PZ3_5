const {Pidrozdil} = require('./mconnectionMongoDB');

const AddPidrozdil = (obj) =>{
    try {
        const pidrozdil = new Pidrozdil(obj);
        pidrozdil.save();
    } catch (error) {
        console.log(error)
    }
}
const RemovePidrozdil = (id) =>{
    try {
        Pidrozdil.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}
const FindPidrozdil = (id) => {
    try {
        Pidrozdil.find({id});
    } catch (error) {
        console.log(error);
    }
}
const UpdatePidrozdil =(id,obj)=>{
    try {
        Pidrozdil.findByIdAndUpdate(id,obj);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {AddPidrozdil,RemovePidrozdil,FindPidrozdil,UpdatePidrozdil};
