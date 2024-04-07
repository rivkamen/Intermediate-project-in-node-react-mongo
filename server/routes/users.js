const express=require("express")
//const cors=require("cors")
const User=require("../models/User")
const userController=require("../controllers/userController")
const router =express.Router()
router.post("/add",userController.add)
router.get("/",userController.getAllUsers)
router.post("/id",userController.getUserById)
router.put("/update",userController.UpdateUser)
router.delete("/delete/:_id",userController.deleteUser)
module.exports=router

