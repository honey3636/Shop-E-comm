const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
});

module.exports=mongoose.model('signups',productSchema);