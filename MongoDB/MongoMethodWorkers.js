const {Workers} = require('./mconnectionMongoDB');

const FindAll = async () =>{
    try {
        const docs = await Workers.find({});
        return docs;
    } catch (error) {
        console.log(error);
    }
}
const AddWorkers = (id,name,surname,patronime,age,rank,date) =>{
    try {
        const worker = new Workers({id,name,surname,patronime,age,rank,date});
        worker.save();
    } catch (error) {
        console.log(error);
    }
}
const DeleteWorkers = (id) =>{
    try {
        Workers.deleteOne({id});
    } catch (error) {
        console.log(error);
    }
}
const DeleteInfoWorkers = (id,option_w) =>{
    try {
        Workers.findByIdAndUpdate({id},{[option_w]:''},{new:true});
    } catch (error) {
        console.log(error);
    }
}
const UpdateWorkers = (id,obj) => {
    try {
        Workers.findByIdAndUpdate(id,obj);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {FindAll,AddWorkers,DeleteWorkers,DeleteInfoWorkers,UpdateWorkers};


