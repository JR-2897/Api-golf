/*********************************/
/* Script connexion base données */
/*********************************/

const mongoose = require('mongoose');
const config=require('../configs/db.config');

exports.connect = () => {
  let url = config.url;

  mongoose.connect(url,
    {
      useNewUrlParser : true
    }
  ).then(
    () => {
      console.log('Nous sommes bien connecte a la base de donnees');
    }
  ).catch(
    err => {
      console.log('Nous n arrivons pas a nous connecter a la base de donnee car :', err);
      process.exit(-1);
    }
  )
}
