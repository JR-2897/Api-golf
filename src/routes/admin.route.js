const express = require('express');
const router = express.Router(); 
const admin = require('../controllers/admin.controller');


//Création d'un compte administrateur

router.post('/admin', auth.create);

//Connexion à un compte administrateur
router.post('/admin/login',admin.login);

module.exports = router;