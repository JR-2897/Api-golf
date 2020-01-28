const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    lastname:{

		type: String
    },
    firstname:{

		type: String
    },
    function:{
        type:String
    },
	email:{

		type:String,
		required : true,
		unique: true,
		lowercase : true
	},

	password:{
		type : String,
		required: true,
		minlenght: 4,
		maxlenght: 128
	},
	admin:{

		type: Boolean
	}},
	
	{
		timestamps:true
	

	
});

module.exports = mongoose.model('Admin', adminSchema);