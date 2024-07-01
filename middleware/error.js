//16
export const errorHandler = (res,statusCode=500,message="Internal Server Error") => {
    return res.status(statusCode).json({
        success:false,
        message:message,
    });
}

//18
export const asyncError = (passedFuc) => (req,res) => {
    return Promise.resolve(passedFuc(req,res)).catch((err) => {
    return errorHandler(res,500,err.message);
    })
}