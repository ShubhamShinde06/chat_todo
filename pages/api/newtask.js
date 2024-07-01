//10
import { checkAuth, connectDB } from "@/utils/features";
//12
import { Task } from "@/models/task";
import { asyncError, errorHandler } from "@/middleware/error";

                //new
const handler = asyncError(async (req,res) => {

  //15
  if(req.method!=="POST") 
    
    //17
    return errorHandler(res,400,"only POST Method is allowed");
  
  //11
  await connectDB();

  //13
  const { title, description } = req.body;

  if(!title || !description)
    return errorHandler(res, 400, "Please Enter All fields");

  const user = await checkAuth(req);

  if (!user)  return errorHandler(res, 401, "Login First");

  //14
  await Task.create({
      title,
      description,
      user:user._id,
    });
  
    res.json({
      success: true,
      message: "Task Created",
    });
});


export default handler;