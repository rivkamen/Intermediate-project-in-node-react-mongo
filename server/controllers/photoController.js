const Photo = require("../models/Photo");
const add=async(req,res)=>{
    const {title,imageUrl}=req.body
    if(!imageUrl){
       return res.status(404).send("there no imageUrl, please insert")
    }
    const photo=await Photo.create({title,imageUrl})
    res.json(photo)
    }
const getAllPhotos=async(req,res)=>{
    const photos=await Photo.find().lean()
    if(!photos)
    {
        return res.send("there no photos, please insert")
    }
   return res.json(photos)
}
const getPhotoById=async(req,res)=>{
    const {_id}=req.body
    
        const photo=await Photo.findById(_id).lean()
    if(!photo)
    {
        return res.send(`There No photo with id: ${_id}`)
    }
    return res.json(photo)
}
const UpdatePhoto=async(req,res)=>{
    const {_id,title,imageUrl}=req.body
   
    const photo=await Photo.findById(_id)

if(!photo){
   return res.send(`There No photo with id: ${_id}`)
}
    if(title){
        photo.title=title;
    }
    if(imageUrl)
    {
        photo.imageUrl=imageUrl;
    }
    
    const MyUpdatePhoto=await photo.save()
    return res.json(MyUpdatePhoto)
}
const deletePhoto=async(req,res)=>{
    const {_id}=req.body
    const photo=await Photo.findById(_id)
 if(!photo){
        return res.send(`There No photo with id: ${_id}`)
    }
    await photo.deleteOne()
    return res.json(`${photo.imageUrl} is deleted`)
}
module.exports={add,deletePhoto,UpdatePhoto,getPhotoById,getAllPhotos}
