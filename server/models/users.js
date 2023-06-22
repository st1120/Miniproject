const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type:String,required: true, unique:true},
    email:{type:String,required: true, unique:true},
    name:{type:String,required: true},
    password:{type:String,required: true},
    isAdmin:{type:Boolean,default:false},
    isDriver:{type:Boolean,default:false}
},
{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users
