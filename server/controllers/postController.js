const Post = require("../models/Post");
console.log("add");
const add=async(req,res)=>{
    const {title,body}=req.body
    if(!title){
      return  res.status(404).send("there no title, please insert")
    }
    console.log("hi");
    const post=await Post.create({title,body})
    res.json(post)
    }
const getAllPosts=async(req,res)=>{
    const posts=await Post.find().lean()
    if(!posts)
    {
        res.send("there no posts, please insert")
    }
    res.json(posts)
}
const getPostById=async(req,res)=>{
    const {_id}=req.params
   
        const post=await Post.findById(_id).lean()
    
    if(!post){
        return res.send(`There No post with id: ${_id}`)
    }
    res.json(post)
}
const UpdatePost=async(req,res)=>{
    const {_id,title,body}=req.body
    const post=await Post.findById(_id)

if(!post){
   return res.send(`There No post with id: ${_id}`)
}
    if(title){
        post.title=title;
    }
    if(body)
    {
        console.log(body.puzzle);
        if(body.puzzle)
        {
           post.body.puzzle=body.puzzle;
           
        }
        

        if(body.exe)
        {
        post.body.exe=body.exe;
       
        }
    }
    
    const MyUpdatePost=await post.save()
    res.json(MyUpdatePost)
}
const deletePost=async(req,res)=>{
    const {id}=req.params
    const post=await Post.findById(id)
if(!post){
        return res.send(`There No post with id: ${_id}`)
    }
    await post.deleteOne()
    res.json(`${post.title} is deleted`)
}
module.exports={add,deletePost,UpdatePost,getPostById,getAllPosts}
