const express = require('express');
const app = express();
const path = require('path');
const _position = __dirname;
const port = process.env.PORT || 8080;


app.use(express.static(path.join(_position,'public')));
app.set("view engine", "hbs");

app.get('/',(req,res)=>{
    res.send('Server started');
});

app.listen(port, ()=>{
    console.log(`server has been started on port ${port}`);
    try {
        require('./MongoDB/mconnectionMongoDB');
        require('./MySQLDB/connectionMysql');
    } catch (error) {
        console.log(error);
    }
})