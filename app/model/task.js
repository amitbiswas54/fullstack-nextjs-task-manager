import mongoose from "mongoose";


export const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
   content:{
    type: String,
    required: [true, "Please provide a content"], 
    },  
    date: {
        type: Date,
        default: Date.now,
        required: [true, "Please provide a date"],
    }, 
    status: {
        type: String,
        enum: ["pending", "completed", "just_added"],  
       default: "pending", 
   },
   userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",
    required: [true, "Please provide a userId"],
   }
}
)

export const Task = mongoose.models.tasks || mongoose.model('tasks', TaskSchema);