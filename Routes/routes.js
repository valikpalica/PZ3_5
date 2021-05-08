const express = require('express');
const router = express.Router();
const GetAllInfo =  require('../Controllers/getAllInfo');
const getallWorkers = require('../Controllers/getAllWorkers');
const InsertPid = require('../Controllers/InsertPidrozdil');
const InsertPos = require('../Controllers/InsertPosada');
const InsertWorker = require('../Controllers/addWorkers');
const deleteWorker = require('../Controllers/deleteWorker');
const deleteInfo = require('../Controllers/deleteinfo');
const UpdateWorker = require('../Controllers/updateWorker');
const UpdatePidroz = require('../Controllers/updatePidrozdil');
const UpdatePosada = require('../Controllers/updatePosada');
const getPidrozdil = require('../Controllers/getPidrozdil');
const getPosadas = require('../Controllers/getPosadas');
const getId = require('../Controllers/getId');
const getPidrozdilId = require('../Controllers/getPidrozdil');
const getPosadasId = require('../Controllers/getPosadasId');


router.get('/main',(req,res)=>{
    getallWorkers().then(data => {
        res.status(200).json(data);
    });
});
router.get('/posadas',(req,res)=>{
    try {
        getPosadas().then(data=>{
            res.status(200).json(data);
        })
    } catch (error) {
        res.status(400).json({answer:'error'});
    }
})

router.get('/pidrozdil',(req,res)=>{
    try {
        getPidrozdil().then(data=>{
            console.log(data);
            res.status(200).json(data)
        });
    } catch (error) {
        res.status(400).json({answer:'error'});
    }
})
router.post('/information',(req,res)=>{
    let {id} = req.body;
    GetAllInfo(id).then(data=>{
        res.status(200).json(data);
    })
})
router.post('/addWorker',async (req,res)=>{
    try {
        let {name,surname,patronime,rank,date} = req.body;
        let id = await getId();
        console.log(id);
        InsertWorker({id,name,surname,patronime,rank,date});
        res.status(200).json({answer:"ok"});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
})
router.post('/addPidrozdil',async (req,res)=>{
    try {
        let {name} = req.body;
        let id = await getPidrozdilId()
        InsertPid({id,name});
        res.status(200).json({answer:"ok"});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
})
router.post('/addPosada',async (req,res)=>{
    try {
        let {name,id_worker,id_pidrozdil} = req.body;
        let id = await getPosadasId();
        InsertPos({id,name,id_worker,id_pidrozdil});
        res.status(200).json({answer:'ok'})
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
})
router.post('/deleteWorker',(req,res)=>{
    try {
        let {id} = req.body;
        console.log(id);
        deleteWorker(id);
        res.status(200).json({answer:'ok'});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
});
router.post('/deleteInfo',(req,res)=>{
    try {
        let {id,option} = req.body;
        deleteInfo(id,option);
        res.status(200).json({answer:'ok'});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
})
router.post('/updateWorker',(req,res)=>{
    try {
        let {id,obj} = req.body;
        UpdateWorker(id,obj);
        res.status(200).json({answer:'ok'});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'});
    }
});
router.post('/updatePosada',(req,res)=>{
    try {
        let {id,obj} = req.body;
        UpdatePosada(id,obj)
        res.status(200).json({answer:'ok'});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'})
    }
})
router.post('/updatePidrozdil',(req,res)=>{
    try {
        let {id,obj} = req.body;
        console.log(id,obj);
        UpdatePidroz(id,obj);
        res.status(200).json({answer:'ok'});
    } catch (error) {
        console.log(error);
        res.status(400).json({answer:'error'})
    }
})


module.exports = router;