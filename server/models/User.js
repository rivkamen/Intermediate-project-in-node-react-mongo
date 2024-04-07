const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    address:{
        type:String
        
    },
    phone:{
        type:String,
        maxLength:10

    }},
    {
        timestamps:true
        }
    

 )
module.exports=mongoose.model("User",userSchema)