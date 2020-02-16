const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter=require('../routes/');
const cors=require('cors');
//démarrer express
const app= express();

//middleware
app.use(bodyParser.json());
app.use(cors);

//routes
app.use('/api/v1',apiRouter);

exports.start = () =>{
    let port = config.port;
    app.listen(port,(err)=> {
        if(err){
            console.log('Erreur:${err}');
            process.exit(-1);
        }
        console.log('Application en cours de lancement sur le port ',port);
    })
}
