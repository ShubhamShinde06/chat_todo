//9
import mongoose from "mongoose";
import { User } from "@/models/user";
import { serialize } from "cookie";
import jwt  from "jsonwebtoken";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL,
    {dbName : "chatnotes",})
    .then((c) => {
        console.log(`Database Connected with ${c.connection.host}`);
    })
    .catch((err) => {
        console.log(err)
    })
};

//22
export const cookieSetter = (res,token,set) => {
    res.setHeader(
        "Set-Cookie",
        serialize("token", set ? token : "",{
        path: "/",
        httpOnly:true,
        maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    }))
}

//24
export const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET);
}

//30
export const checkAuth = async (req) => {
    const cookie = req.headers.cookie;
    if (!cookie) return null;
  
    const token = cookie.split("=")[1];
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    return await User.findById(decoded._id);

}