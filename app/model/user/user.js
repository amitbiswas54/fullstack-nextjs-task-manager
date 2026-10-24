import mongoose from "mongoose";
import { Schema } from "mongoose";



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide an email"],
      
    } ,
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    about : {
        type: String, 
    },
    profileImage: {
        type: String,
    },  

})


export const User = mongoose.models.users || mongoose.model('users', UserSchema);
