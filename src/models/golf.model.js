/********************************************/
/* Nom du fichier : golf.model.js           */
/* Fonction       : définition d un golf    */
/********************************************/

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
  title: String,
  latitude: Number,
  longitude: Number,
  description: String
})

module.exports =mongoose.model('Golf',golfSchema);
