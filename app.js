const express = require('express');
const app = express();
const path = require('path');
const routes = require('./Routes/routes');
const router_page = require('./Routes/pages');
const  parser = require('body-parser');
const _position = __dirname;
const port = process.env.PORT || 8080;

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.use(express.static(path.join(_position,'/public')));
app.set("view engine", "hbs");

app.use('/data',routes);
app.use('/page',router_page);

app.listen(port, ()=>{
    console.log(`server has been started on port ${port}`);
    try {
        require('./MongoDB/mconnectionMongoDB');
        require('./MySQLDB/synchronizeDB');
    } catch (error) {
        console.log(error);
    }
})