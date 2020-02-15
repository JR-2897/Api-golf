const express = require('express');
const router=express.Router();
const manager =require('../controllers/manager.controller');

//création d'un golf
router.post('/manager', manager.create);

//recherche d'un golf par son id
router.get('/manager/:id', manager.findById);

//Modification d'un golf
router.put('/manager/:id', manager.findByIdAndUpdate);

//Supppression d'un golf
router.delete('/manager/:id', manager.findByIdAndDelete);

module.exports=router;
