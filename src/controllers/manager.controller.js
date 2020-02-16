const Manager=require('../models/manager.model');
const token = require('../helpers/verifyToken');

exports.create = (req,res) => {
token.verifyToken(req,res, function(req,res){
    const manager = new Manager({
        lastname:req.body.lastname,
        firstname:req.body.firstname,
        email:req.body.email,
        phone:req.body.phone
    })
        manager.save()
        .then(data =>{
             res.send(data);
        }).catch(err =>{
            console.log(err)
        })
  })
}

// Donne le manager qui correspond à l'id
exports.findById=(req,res)=>{
  token.verifyToken(req,res, function(req,res){
    User.findById(req.params.id)
    .then(manager =>{
        if(!manager){
            return  res.status(404).send({
                message: "Le manager recherché n'existe pas."
            })
        }
        res.send(manager);
    })
    .catch(err=> {
		res.status(500).send({
			message:err.message
		})
	})
})
}

// Modifie le manager qui correspond à l'id
exports.findByIdAndUpdate = (req,res)=>{
  token.verifyToken(req,res, function(req,res){
    Manager.findByIdAndUpdate(req.params.id,req.body)
    .then(manager =>{
        if(!manager){
            return  res.status(404).send({
                message: "Le manager recherché n'existe pas."
            })
        }

        Manager.findById(req.params.id)
        .then(newManager=>{
            res.send({
                new_maneger:newManager,
                old_manager:manager
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

//Supprime le manager correspondant à l'id
exports.findByIdAndDelete = (req,res)=>{
token.verifyToken(req,res, function(req,res){
    Manager.findByIdAndDelete(req.params.id)
    .then(manager =>{
        if(!manager){
            return  res.status(404).send({
                message: "Le manager recherché n'existe pas."
            })
        }
        res.send({message: `Le manager avec un id ${req.params.id} a bien été supprimé.`});
    })
    .catch(err=> {
		res.status(500).send({
			message:err.message
		})
	})
})
}
