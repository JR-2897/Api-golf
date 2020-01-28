const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {

	//1ère étape : récupérer le token
	let token = req.header['x-access-token'];
	if(!token) {
		return res.status(400).send({
			auth: false,
			message: "missing token"

		})
	}

	jwt.verify(token,"supersecret",function(err,decoded) {
		if(err) {
			console.log(err);
			return res.status(401).send({
				auth:false,
				message: "no authorized"
			})
		}
		next();
	})
}

module.exports = verifyToken;