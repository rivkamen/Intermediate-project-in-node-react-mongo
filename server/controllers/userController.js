const User = require("../models/User");
const add=async(req,res)=>{
    const {name,username,email,address,phone}=req.body
    if(!name||!username){
        return res.status(404).send("there no name or username, please insert")
    }
    const user=await User.create({name,username,email,address,phone})
    res.json(user)
    }
const getAllUsers=async(req,res)=>{
    const users=await User.find().lean()
    if(!users)
    {
        res.send("there no users, please insert")
    }
    res.json(users)
}
const getUserById=async(req,res)=>{
    const {_id}=req.body
    const user=await User.findById(_id).lean()
    if(!user)
    {
            return res.send(`There No user with id: ${_id}`)
    }
    res.json(user)
}
const UpdateUser=async(req,res)=>{
    const {_id,name,username,email,address,phone}=req.body
   
    const user=await User.findById(_id)

if(!user){
   return res.send(`There No user with id: ${_id}`)
}
    if(name){
        user.name=name;
    }
    if(username){
        user.username=username;
    }
    if(email)
    {
        user.email=email;
    }
    if(address){
        user.address=address;
    }
    if(phone){
        user.phone=phone;
    }
    
    const MyUpdateUser=await user.save()
    res.json(MyUpdateUser)
}
const deleteUser=async(req,res)=>{
    const {_id}=req.params
    const user=await User.findById(_id)
if(!user){
        return res.send(`There No user with id: ${_id}`)
    }
    await user.deleteOne()
    return res.json(`${user.name} is deleted`)
}
module.exports={add,getAllUsers,deleteUser,UpdateUser,getUserById}
