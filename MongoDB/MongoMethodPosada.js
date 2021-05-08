const {Posada} = require('./mconnectionMongoDB');

const AddPosada = (obj) =>{
    try {
        const posada = new Posada(obj);
        posada.save();
    } catch (error) {
        console.log(error)
    }
}
const RemovePosada = (id) =>{
    try {
        Posada.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}
const FindPosada = async () => {
    try {
       let body = await Posada.find({});
       return body;
    } catch (error) {
        console.log(error);
    }
}
const UpdatePosadaMongo = (id,obj) =>{
    try {
        Posada.findByIdAndUpdate(id,obj);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {AddPosada,RemovePosada,FindPosada,UpdatePosadaMongo};