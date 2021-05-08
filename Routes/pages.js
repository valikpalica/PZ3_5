const express = require('express');
const router_page = express.Router();

router_page.get('/main',(req,res)=>{
    res.render('main.hbs');
})
router_page.get('/information/:id',(req,res)=>{
    let {id} = req.params;
    res.render('Information.hbs',{id});
})
router_page.get('/appendWorker',(req,res)=>{
    res.render('appendWorker.hbs');
})

module.exports = router_page;