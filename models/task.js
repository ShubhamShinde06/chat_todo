//3
import mongoose from "mongoose";

//4
const schema = new mongoose.Schema({

    //8
    title : {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required:true
    },
    isCompleted:{ 
        type:Boolean,
        default: false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

//5
mongoose.models = {};

//6
export const Task = mongoose.model("Task",schema)