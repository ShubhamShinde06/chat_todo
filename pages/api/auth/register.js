import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const { asyncError, errorHandler } = require("@/middleware/error")

//21
const handler = asyncError(async (req,res) => {

    if(req.method !== "POST")
        return errorHandler(res, 400, "Only POST MEthod is allowed");

    const {name,email,password} = req.body;

    if(!name || !email || !password) 
        return errorHandler(res,400,"Please enter all fields");
    await connectDB();

    let user = await User.findOne({email});

    if(user) return errorHandler(res,400,"User register with this Email");

    //25
    const hashedPassword = await bcrypt.hash(password,10)
    
    user = await User.create({
        name,
        email,
        password : hashedPassword,
    });

    //23
    const token = generateToken(user._id);
    cookieSetter(res,token,true);
    res.status(201).json({
        success:true,
        message:"Registerd Successfully",
        user,
    });

});

export default  handler;