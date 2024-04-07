const express=require("express")
//const cors=require("cors")
const Todo=require("../models/Todo")
const todoController=require("../controllers/todoController")
const router =express.Router()
router.post("/add",todoController.add)
router.get("/",todoController.getAllTodos)
router.post("/id",todoController.getTodoById)
router.put("/update",todoController.UpdateTodo)
router.delete("/delete/:_id",todoController.deleteTodo)
router.put("/update/Comp",todoController.updateComp)

module.exports=router

