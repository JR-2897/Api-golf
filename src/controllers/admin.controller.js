const Admin = require('../models/admin.model');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const p_jwt = require('../configs/jwt.config');

//Création d'un compte admin
exports.create = (req,res) =>{
	//let hashedPassword = bcrypt.hashSync(req.body.password,8);
	const admin = new Admin({
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        function: req.body.firstname,
		email : req.body.email,
		password : req.body.password,
		admin : req.body.admin
	})
	admin.save()
	.then(data => {

        let adminToken = jwt.sign(
        {
            email:admin.email,
            admin:admin.admin
        },
        "supersecret",
        {
            expiresIn:86400
        }
        )
        res.send({
            auth:true,
            token:adminToken,
            body: {
                email:data.email,
                lastname:data.lastname
            }
        });
        }).catch(err =>{
            console.log(err)
        })
    }

    /* Connexion pour pouvoir utiliser l'api
exports.login= (req,res)=>{
	Admin.findOne(
		{email:req.body.email},
		function(err,admin){
			if(!admin) return res.status(404).send("L'administrateur recherché n'existe pas.");
            comparaison des mdp
			let passwordIsValid= bcrypt.compareSync(req.body.password,admin.password);
			check si la comparaison est True
			if(!passwordIsValid) return res.status(401).send({
				auth:false,
				token: null
			});
			On génère un token de session
			let token = jwt.sign(
                {
                    id:admin._id,
                    admin:admin.admin,
                    data:admin
                },
                    p_jwt,
                {
                    expires:86400
                });
                res.status(200).send({
                    auth:true,
                    token:token
                })
		}
	)

}*/
