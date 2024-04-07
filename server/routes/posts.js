const express=require("express")
//const cors=require("cors")
const Post=require("../models/Post")
const PostController=require("../controllers/PostController")
const router =express.Router()
router.post("/add",PostController.add)
router.get("/",PostController.getAllPosts)
router.post("/id",PostController.getPostById)
router.put("/update",PostController.UpdatePost)
router.delete("/delete/:id",PostController.deletePost)
module.exports=router

