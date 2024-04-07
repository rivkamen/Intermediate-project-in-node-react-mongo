const Todo = require("../models/Todo");
const add=async(req,res)=>{
    const {title,completed,tags}=req.body
    const todo=await Todo.create({title,completed,tags})
    if(!title){
        res.send("there no title, please insert")
    }
    res.json(todo)  
}
const getAllTodos=async(req,res)=>{
    const todos=await Todo.find().lean()
    if(!todos)
    {
        return res.send("there no todos, please insert")
    }
    res.json(todos)
}
const getTodoById=async(req,res)=>{
    const {_id}=req.body
    
        const todo=await Todo.findById(_id)
    
    if(!todo){
        return res.send(`There No todo with id: ${_id}`)
    }
    res.json(todo)
}
const UpdateTodo=async(req,res)=>{

    const {_id,title,tags}=req.body
    
    const todo=await Todo.findById(_id)
    if(!todo){
        return res.send(`There No todo with id: ${_id}`)
    }
    if(title){
        todo.title=title;
    }
    
    
    if(tags)
    {

    todo.tags=tags;
    }

    const MyUpdateTodo=await todo.save()
    return res.json(MyUpdateTodo)
}
const updateComp= async(req,res)=>{
    const {_id,completed}=req.body
    const todo= await Todo.findById(_id).exec()
    if(!todo)
    {

        return res.send(`There No todo with id: ${_id}`)

    }
    if(!completed)
    {

        return res.send(`insert completed`)

    }

    todo.completed=completed;

    const MyUpdateTodo=await todo.save()
    return res.json(MyUpdateTodo)
}
const deleteTodo=async(req,res)=>{
    const {_id}=req.params
    console.log(_id);
        const todo=await Todo.findById(_id)
        

if(!todo){
    return res.send(`There No todo with id: ${_id}`)
}
   await todo.deleteOne()
   return res.json(`${todo.title} is deleted`)
}
module.exports={add,deleteTodo,UpdateTodo,getTodoById,getAllTodos,updateComp}