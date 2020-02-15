/********************************************/
/* Nom du fichier : golf.controller.js      */
/* Fonction       : CRUD pour les golfs     */
/********************************************/

const Golf=require('../models/golf.model');
const token = require('../helpers/verifytoken');

exports.create = (req,res) => {
  token.verifyToken(req,res, function(req,res){
    const golf = new Golf({
        title:req.body.title,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        description:req.body.description
    })
        golf.save()
        .then(data =>{
             res.send(data);
        }).catch(err =>{
            console.log(err)
        })
  })
}

// Permet d'afficher le golf correspond a l id donnee par le client
exports.findById=(req,res)=>{
    User.findById(req.params.id)
    .then(golf =>{
        if(!golf){
            return  res.status(404).send({
                message: "Erreur Client : L id saisit ne correspond a aucun golf."
            })
        }
        res.send(golf);
    })
    .catch(err=> {
		res.status(500).send({
			message:err.message
		})
	})
}

// Permet de modifier le golf grace a l id donnee par le client
exports.findByIdAndUpdate = (req,res)=>{
  token.verifyToken(req,res, function(req,res){
    Golf.findByIdAndUpdate(req.params.id,req.body)
    .then(golf =>{
        if(!golf){
            return  res.status(404).send({
                message: "Erreur Client : L id saisit ne correspond a aucun golf."
            })
        }

        Golf.findById(req.params.id)
        .then(newGolf=>{
            res.send({
                new_golf:newGolf,
                old_golf:golf
            });
        })
    })
    .catch(err=> {
		res.status(500).send({
			message:err.message
		})
	})
})
}

//Permet la suppression du golf grace a l id donnee par le client
exports.findByIdAndDelete = (req,res)=>{
  token.verifyToken(req,res, function(req,res){
    Golf.findByIdAndDelete(req.params.id)
    .then(golf =>{
        if(!golf){
            return  res.status(404).send({
                message: "Erreur Client : L id saisit ne correspond a aucun golf."
            })
        }
        res.send({message: 'Le manager avec un id ${req.params.id} a bien été supprimé.'});
    })
    .catch(err=> {
		res.status(500).send({
			message:err.message
		})
	})
})
}
