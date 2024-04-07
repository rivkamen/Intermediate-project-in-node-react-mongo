const express=require("express")
//const cors=require("cors")
const Photo=require("../models/Photo")
const photoController=require("../controllers/photoController")
const router =express.Router()
router.post("/add",photoController.add)
router.get("/",photoController.getAllPhotos)
router.post("/id",photoController.getPhotoById)
router.put("/update",photoController.UpdatePhoto)
router.delete("/delete",photoController.deletePhoto)
module.exports=router

