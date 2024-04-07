const mongoose=require("mongoose")
const conectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)

        }
        catch(err){
            console.error("not error conection to DB!!! sorry....😥😥😣"+err +" anyway, you should be carefull!!!")
        }
    }
    module.exports=conectDB
