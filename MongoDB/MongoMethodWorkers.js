const {Workers} = require('./mconnectionMongoDB');

const FindAll = async () =>{
    try {
        const docs = await Workers.find({});
        return docs;
    } catch (error) {
        console.log(error);
    }
}
const AddWorkers = (obj) =>{
    try {
        const worker = new Workers(obj);
        worker.save();
    } catch (error) {
        console.log(error);
    }
}
const DeleteWorkers = (id) =>{
    try {
        Workers.deleteOne({id:id},(err,result)=>{
            if(err) throw new Error(err);
        });
    } catch (error) {
        console.log(error);
    }
}
const DeleteInfoWorkers = (id,option_w) =>{
    try {
        Workers.updateOne({id:id},{[option_w]:''},{new:true},(err,result)=>{
            console.log(result);
        });
    } catch (error) {
        console.log(error);
    }
}
const UpdateWorkers = (id,obj) => {
    try {
        console.log(id,obj);
        Workers.updateOne({id:id},obj,(err,result)=>{
            console.log(result);
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {FindAll,AddWorkers,DeleteWorkers,DeleteInfoWorkers,UpdateWorkers};


