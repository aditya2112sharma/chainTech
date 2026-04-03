const express = require('express')
const {connectToMongoDB} = require('./connectDB')
const TASK = require('./models/task')
require('dotenv').config()

const app = express()
app.use(express.json())
connectToMongoDB(process.env.URL).then(()=>(
    console.log("Database is connected")
))

app.post('/task',async (req,res)=>{
    try{
        console.log(req.body)
        const {title,description} = req.body
        if(title === undefined || title.trim()==="") return res.status(400).json({message:"Title can not be empty"})
        await TASK.create(req.body)
        return res.status(201).json({message: "task created"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
})
app.get('/task', async (req,res)=>{
    try{
        const data = (await TASK.find({}))
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.patch('/task/:id/complete',async(req,res)=>{
    try{
        const id = req.params.id
        const updatedTask = await TASK.findOneAndUpdate({_id:id,completed:false},{completed: true},{new: true})
        if(!updatedTask) return res.status(400).json({message:"task not found or already completed"})
        return res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.put('/task/:id', async(req,res)=>{
    try{
        const {title,description,completed} = req.body 
        if(title !== undefined && title.trim()==="") return res.status(400).json({message:"Title can not be empty"})
         const existingTask = await TASK.findById(req.params.id);

        if (!existingTask) {
        return res.status(404).json({ message: "Task not found" });
        }
        if (completed !== undefined && existingTask.completed === true && completed === true) {
            return res.status(400).json({
                message: "Task is already completed"
            });
    }
        const updatedTask = await TASK.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.delete('/task/:id', async(req,res)=>{
    try{
        const deletedTask = await TASK.findOneAndDelete({_id:req.params.id})
        if(!deletedTask) return res.status(404).json({message:"task not found"})
        res.status(200).json(deletedTask)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.listen(8000, ()=>(console.log("connected to 8000")))


