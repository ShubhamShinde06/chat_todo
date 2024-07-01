import { checkAuth, connectDB } from "@/utils/features";
import { Task } from "@/models/task";
import { asyncError, errorHandler } from "@/middleware/error";

const handler = asyncError(async (req,res) => {

  if(req.method!=="GET") 
    return errorHandler(res,400,"only GET Method is allowed");
  await connectDB();

  //31
  const user = await checkAuth(req)
    
  const tasks = await Task.find({user: user._id});
    res.json({
      success: true,
      tasks,
    });
});


export default handler;