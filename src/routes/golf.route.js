const express = require('express');
const router=express.Router();
const golf =require('../controllers/golf.controller');

//création d'un golf
router.post('/golf',golf.create);

//recherche d'un golf par son id
router.get('/golf/:id', golf.findById);

//Modification d'un golf
router.put('/golf/:id', golf.findByIdAndUpdate);

//Supppression d'un golf
router.delete('/golf/:id', golf.findByIdAndDelete);

module.exports=router;