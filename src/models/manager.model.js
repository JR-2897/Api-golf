const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const managerSchema = new Schema({
    lastname:{
        type:String
    },
    firstname:{
        type:String
    },
    mail:{
        type:String,
        lowercase:true
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10
    }}
    ,{
    timestamps:true
});


module.exports =mongoose.model('Manager',managerSchema);