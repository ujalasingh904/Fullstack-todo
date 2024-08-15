import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
}, { Timestamp: true })

export const  todo = mongoose.model('todo', todoSchema) 