const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:false,
    },
    completed: {
        type: Boolean,
        required:true,
        default: false
    },
    dueDate: {
        type: Date,
        required: false
    },
    category: {
        type: String,
        enum: ["Work", "Personal", "Study", "Other"],
        default: "Other"
    }
},{timestamps: true})
const TASK = mongoose.model('Task',taskSchema)
module.exports = TASK
