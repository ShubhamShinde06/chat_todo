//3
import mongoose from "mongoose";

//4
const schema = new mongoose.Schema({

    //7
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        unique: true,
        required: true,
    },
    password : {
        type:String,
        required: true,
        select: false,
        minLength:[6, "Password too short"],
    },

});

//5
mongoose.models={}

//6
export const User = mongoose.model("User",schema)