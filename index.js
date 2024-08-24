const express = require("express");//importando
const app = express(); //iniciando o express

app.use(express.json()); //iniciando o express json para lidar com dados em formato json
app.use(express.urlencoded({ extended: false })); // iniciando o express urlencoded para lidar com dados em formato url

const conn = require('./db/conn');
 conn()

const routes = require('./routes/router')
app.use('/', routes)

app.listen(3001, function(){
    console.log("Servidor UP porta 3001");
})