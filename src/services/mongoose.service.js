const mongoose = require('mongoose');
const config=require('../configs/db.config');

exports.connect = ()=> {
    let url = config.url;
    mongoose.connect(url,
        {
            useNewUrlParser :true,
            useUnifiedTopology: true

        }
    ).then (
        () =>{
            console.log('Connexion à la base de données avec succès.');
        }
    ).catch(
        err => {
            console.log('Vous ne pouvez pas vous connecter à la base de données.',err);
            process.exit(-1);
        }
    )
}